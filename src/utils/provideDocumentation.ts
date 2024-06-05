import chalk from 'chalk';
import swaggerUi from 'swagger-ui-express';
import config from 'config';
import { Express } from 'express';
import { apiDefinition } from 'fcecom-frontend-api-server';

// Swagger UI
export const provideDocumentation = (app: Express) => {
  const port = config.get('server.port') || 3000;
  const basePath = config.get('server.basePath');

  if (config.get('server.docs.enabled')) {
    apiDefinition['servers'] = [{ url: `${basePath}` }];
    const docsBasePath = config.get('server.docs.basePath') ?? '/docs';

    app.use(`${docsBasePath}`, swaggerUi.serve, swaggerUi.setup(apiDefinition));
    console.log(`Swagger UI is ${chalk.green(`available at ${config.get('server.ssl.enabled') ? 'https' : 'http'}://localhost:${port}${docsBasePath}`)}`);
  }
};
