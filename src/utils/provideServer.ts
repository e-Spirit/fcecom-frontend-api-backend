import config from 'config';
import chalk from 'chalk';

import { Express } from 'express';
import https from 'https';

import fs from 'fs';
import path from 'node:path';

export default (app: Express): https.Server | Express => {
  const ssl: SSLConfig = config.get('server.ssl') ?? {};

  if (ssl.enabled === true) {
    const { key, cert } = ssl;

    if (!key || !cert) {
      console.error(chalk.red('Enabled SSL but missing certificate information. Terminating...'));
      process.exit(1);
    }

    try {
      console.log(`Server is configured to start ${chalk.green('with SSL Encryption')}`);

      return https.createServer(
        {
          key: fs.readFileSync(path.resolve(process.cwd(), key)),
          cert: fs.readFileSync(path.resolve(process.cwd(), cert)),
        },
        app
      );
    } catch (error) {
      console.error(chalk.red('Problem while configuring SSL:'));
      console.error(error);
      console.error('Terminating...');

      process.exit(1);
    }
  }

  console.log(`Server starts ${chalk.magenta('without SSL Encryption')}`);
  return app;
};

type SSLConfig = {
  enabled?: boolean,
  key?: string,
  cert?: string
}