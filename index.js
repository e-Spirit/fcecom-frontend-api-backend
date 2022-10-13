require('dotenv').config();
require('cross-fetch/polyfill');
const express = require('express');
const { EcomFSXARemoteApi, sessionMiddleware } = require('fcecom-frontend-api-server');
const expressIntegration = require('fcecom-frontend-api-server/dist/lib/core/integrations/express').default;

const cors = require('cors');
const { APIKEY, NAVIGATION_SERVICE_URL, CAAS_URL, FS_SERVER_URL, PROJECT_ID, TENANT_ID, PORT } = process.env;
const app = express();

const remoteApi = new EcomFSXARemoteApi({
  apikey: APIKEY,
  navigationServiceURL: NAVIGATION_SERVICE_URL,
  caasURL: CAAS_URL,
  projectID: PROJECT_ID,
  tenantID: TENANT_ID,
  fsServerUrl: FS_SERVER_URL
});

app.use(cors());
app.use(express.json()); /* needs to be set here else it overrides the sessionMiddleware */
app.use(sessionMiddleware());

app.use('/api', expressIntegration({ api: remoteApi }));

app.use(express.static(__dirname + '/public'));
app.set('/js', express.static(__dirname + 'public/js'));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
