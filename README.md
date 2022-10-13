# FirstSpirit Connect for Commerce Frontend API Backend Service

The [Connect for Commerce Frontend API](https://www.npmjs.com/package/fcecom-frontend-api) is a superset of the [FSXA API](https://www.npmjs.com/package/fsxa-api) and requires the use of a backend service for authentication.

For more information about FirstSpirit or Connect for Commerce please
use [this contact form](https://www.crownpeak.com/contact-us) to get in touch.

## How to use

1. Clone Github repository.
2. Run `npm i`.
3. Use the **.env.template** to create an **.env** file.
4. Run `npm run start:watch` to start the service or `npm run start:watch` to enable live reload.

## Configuration

| Param                  | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| API_KEY                | The api key of the CaaS instance.                    |
| NAVIGATION_SERVICE_URL | The url of the navigation service.                   |
| CAAS_URL               | The url of the CaaS instance.                        |
| PROJECT_ID             | The id of the CaaS project.                          |
| TENANT_ID              | The tenant id of the CaaS project.                   |
| CONTENT_MODE           | Can be set to either `preview` or `release`.         |
| PORT                   | The port on which the backend service is started.    |

## Frontend Extension

Serving the [Connect for Commerce Frontend Extension](https://github.com/e-Spirit/fcecom-frontend-extension) is now being handled by this service and served at following path:

`http://localhost:3001/js/content-creator-extension.js`

You can replace the host with your own configuration.

## Legal Notices

The Connect for Commerce Frontend API Backend Service is a product of [Crownpeak Technology GmbH](https://www.crownpeak.com), Dortmund, Germany. The Connect for Commerce Frontend API Backend Service is subject to the Apache-2.0 license.

## Disclaimer

This document is provided for information purposes only. Crownpeak may change the contents hereof without notice. This document is not warranted to be error-free, nor subject to any other warranties or conditions, whether expressed orally or implied in law, including implied warranties and conditions of merchantability or fitness for a particular purpose. Crownpeak specifically disclaims any liability with respect to this document and no contractual obligations are formed either directly or indirectly by this document. The technologies, functionality, services, and processes described herein are subject to change without notice.