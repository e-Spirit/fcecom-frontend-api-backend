process.env.NODE_CONFIG_DIR = './config';

import config from 'config';
import { logFinalConfig } from './utils/logConfig.js';
import chalk from 'chalk';

import express from 'express';
import cors from 'cors';

import { getEcomEndpoints } from 'fcecom-frontend-api-server';
import provideServer from './utils/provideServer'; // Configuration

// Configuration
logFinalConfig();
console.info('Inspect config sources via `npm run config:inspect`');

const port = config.get('server.port') || 3000;
const basePath = config.get('server.basePath');
const coreConfig = config.get('core');

// Express Server implementation
const app = express();
app.disable('x-powered-by'); // Disable the fingerprinting of this web technology. SonarCube: javascript:S5689

app.use(cors());

const ecomEndpoints = getEcomEndpoints(config.util.toObject(coreConfig));
if (!ecomEndpoints) {
  console.error(`Problem getting endpoints. Terminating...`);
  process.exit(1);
}

app.use(`${basePath}`, ecomEndpoints);

provideServer(app).listen(port, () => console.log(`Server started on ${chalk.green(`PORT ${port}`)}`));
