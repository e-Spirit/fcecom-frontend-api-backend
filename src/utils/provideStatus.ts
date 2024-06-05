import express, { Express } from 'express';
import config from 'config';
import path from 'node:path';
import { execSync } from 'node:child_process';

const {
  version: backend_version,
  dependencies: {
    'fcecom-frontend-api-server': { version: server_version },
  },
} =
  // language=Shell Script
  JSON.parse(execSync(`npm list fcecom-frontend-api-server --depth=0 --json`, { encoding: 'utf-8' }));

export const provideStatus = (app: Express) => {
  const ssl_active = config.get('server.ssl.enabled') || false;
  const docs_active = config.get('server.docs.enabled') || false;
  const docs_basePath = config.get('server.docs.basePath');
  const api_basePath = config.get('server.basePath');

  app.get('/status', (req, res) => {
    res.contentType('application/json');

    res.send(
      JSON.stringify(
        {
          backend_version,
          server_version,
          ssl_active,
          docs_active,
          docs_basePath,
          api_basePath,
        },
        null,
        4
      )
    );
  });

  app.get('/status.js', (req, res) => {
    res.contentType('application/javascript');

    // language=JavaScript
    res.send(`
        // Version
        document.getElementById('version').innerText = '${backend_version}';

        // Configuration
        const state = (part, active) => {
            const status = document.getElementById(part + '_status');
            status?.classList.add('text-' + (active ? 'green' : 'red') + '-500')
            status.innerText = active ? 'Active' : 'Inactive'
        }

        const reference = (part, active, href) => {
            state(part, active)

            const inactiveLabel = document.getElementById(part + '_inactive_label');
            const activeLink = document.getElementById(part + '_active_link');

            activeLink.href = href
            document.getElementById(part + '_basePath').innerText = href;

            if (active) {
                inactiveLabel.classList.add('hidden')
                activeLink.classList.remove('hidden')
            } else {
                inactiveLabel.classList.remove('hidden')
                activeLink.classList.add('hidden')
            }
        }

        state('ssl', ${ssl_active});                           // SSL
        reference('docs', ${docs_active}, '${docs_basePath}'); // Documentation
        reference('api', true, '${api_basePath}');             // API
        reference('status', true, '/status');                  // Status JSON Endpoint

        document.getElementById('server_version').innerText = 'v${server_version}'
    `);
  });

  app.use(express.static(path.join(path.resolve(), 'src/status/')));
};
