const { getEcomEndpoints } = require('fcecom-frontend-api-server');
const { logConfig } = require('./utils/logConfig');

// Configuration
process.env.NODE_CONFIG_DIR = './config';

const config = require('config');
logConfig(config);

const port = config.get('server.port') || 3000;
const basePath = config.get('server.basePath');
const coreConfig = config.get('core');

// Express Server implementation
const app = require('express')();
app.disable('x-powered-by'); // Disable the fingerprinting of this web technology. SonarCube: javascript:S5689

app.use(require('cors')());

const ecomEndpoints = getEcomEndpoints(coreConfig);
if (!ecomEndpoints) {
  console.error(`Problem getting endpoints. Terminating...`);
  process.exit(1);
}

app.use(`${basePath}`, ecomEndpoints);

app.listen(port, () => console.log(`Server started on PORT ${port}`));
