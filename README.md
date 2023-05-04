# FirstSpirit Connect for Commerce Frontend API Backend Service

The [Connect for Commerce Frontend API Client](https://www.npmjs.com/package/fcecom-frontend-api-client) requires this
backend service to communicate with the CaaS.
It offers the functionalities provided by
the [Connect for Commerce Frontend API Server](https://www.npmjs.com/package/fcecom-frontend-api-server) using an
Express server.

For more information about FirstSpirit or Connect for Commerce please
use [this contact form](https://www.crownpeak.com/contact-us) to get in touch.

## Requirements

A node version of at least 18 is required.

## How to use

1. Clone the repository.
2. Run `npm i`.
3. Use the **config/default.yml** template to create a **config/local.yaml** file.
4. Run `npm start` to start the service or `npm run start:watch` to enable live reload.

## Configuration

### Files

We provide a default configuration under `config/default.yml`. We suggest creating a copy of it and name it `local.yml` for development.

For use in production or just in other environments you have the ability to create separate files. The loading order is managed by the `config`
package we use. Learn more in [their documentation](https://github.com/node-config/node-config/wiki/Configuration-Files#file-load-order).

Alternatively you can override all or just single values with environment variables. They are listed in the tables below. All values not
supplied via environment variables keep their values from the files. We have provided a `.env.template` file in order to simplify the process.

### Project

Configuration of the FirstSpirit related part of the Frontend API module is made within the `core.project` segment of the configuration
files.

|        Param         |      Environment       | Description                        |
|:--------------------:|:----------------------:|:-----------------------------------|
| navigationServiceURL | NAVIGATION_SERVICE_URL | The URL of the navigation service. |
|       caasURL        |        CAAS_URL        | The URL of the CaaS instance.      |
|      projectID       |       PROJECT_ID       | The ID of the CaaS project.        |
|       tenantID       |       TENANT_ID        | The tenant ID of the CaaS project. |

### Core

Core configuration is made within the `core` segment inside the core config.

|     Param      |   Environment    | Description                                                                                                                             |
|:--------------:|:----------------:|-----------------------------------------------------------------------------------------------------------------------------------------|
| fsServerOrigin | FS_SERVER_ORIGIN | The base URL of the server running the Content Creator.                                                                                 |
| defaultLocale  |  DEFAULT_LOCALE  | A fallback locale used if any request is received without explicit locale. Has to have format like in '`de_DE`'                         |
|    logLevel    |    LOG_LEVEL     | Numeric representation of logLevels:<ul><li>DEBUG = 0</li><li>INFO = 1</li><li>WARNING = 2</li><li>ERROR = 3</li><li>NONE = 4</li></ul> |

### API Keys

Configuration of the API keys is made within the `core.project.apiKey` segment inside the core config.

|     Param      | Environment | Description                                                                                         |
|:--------------:|:-----------:|-----------------------------------------------------------------------------------------------------|
| apiKey_master  | MASTER_KEY  | Master API key for both viewing modes. All non-set apiKeys will default to this one.                |
| apiKey_preview | PREVIEW_KEY | The API key of the CaaS instance for preview viewing mode. Leave blank when providing a master key. |
| apiKey_release | RELEASE_KEY | The API key of the CaaS instance for release viewing mode. Leave blank when providing a master key. |

### Server

Configuration of the server itself is made within the `server` segment.

|  Param   | Environment | Description                                        |
|:--------:|:-----------:|----------------------------------------------------|
|   port   |    PORT     | The port on which this backend service is started. |
| basePath |  BASE_PATH  | The path on which this backend service is served.  |

## Legal Notices

The Connect for Commerce Frontend API Backend Service is a product of [Crownpeak Technology GmbH](https://www.crownpeak.com), Dortmund,
Germany. The Connect for Commerce Frontend API Backend Service is subject to the Apache-2.0 license.

Details regarding any third-party software products in use but not created by Crownpeak Technology GmbH, as well as the third-party licenses and, if applicable, update information can be found in the file THIRD-PARTY.txt.

## Disclaimer

This document is provided for information purposes only. Crownpeak may change the contents hereof without notice. This document is not
warranted to be error-free, nor subject to any other warranties or conditions, whether expressed orally or implied in law, including implied
warranties and conditions of merchantability or fitness for a particular purpose. Crownpeak specifically disclaims any liability with
respect to this document and no contractual obligations are formed either directly or indirectly by this document. The technologies,
functionality, services, and processes described herein are subject to change without notice.