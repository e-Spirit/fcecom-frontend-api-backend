# FirstSpirit Connect for Commerce Frontend API Backend Service

The [Connect for Commerce Frontend API client](https://www.npmjs.com/package/fcecom-frontend-api-client) requires this backend service to communicate with the CaaS.
It offers the functionalities provided by the [Connect for Commerce Frontend API server](https://www.npmjs.com/package/fcecom-frontend-api-server) using an Express server.

For more information about FirstSpirit or Connect for Commerce please
use [this contact form](https://www.crownpeak.com/contact-us) to get in touch.

## How to use

We recommend version 18 of Node.js.

1. Clone git repository.
2. Run `npm i`.
3. Use the **config/default.yml** template to create an **config/local.yaml** file.
4. Run `npm start` to start the service or `npm run start:watch` to enable live reload.

## Configuration

Configuration of the FirstSpirit related part of the Frontend API module is made within the `core.project` segment of
the
configuration files.

|        Param         | Description                                        |
|:--------------------:|----------------------------------------------------|
| navigationServiceURL | The URL of the navigation service.                 |
|       caasURL        | The URL of the CaaS instance.                      |
|      projectID       | The ID of the CaaS project.                        |
|       tenantID       | The tenant ID of the CaaS project.                 |

Core configuration is made within the `core` segment inside the core config.

|     Param     | Description                                                                                                                              |
|:-------------:|------------------------------------------------------------------------------------------------------------------------------------------|
| fsServerOrigin | The base URL of the server running the Content Creator.                                                                                  |
|   logLevel    | Numeric representation of logLevels:<ul><li>DEBUG = 0</li><li>INFO = 1</li><li>WARNING = 2</li><li>ERROR = 3</li><li>NONE = 4</li></ul>  |

Configuration of the API keys is made within the `core.project.apiKey` segment inside the core config.

|      Param       | Description                                                                                         |
|:----------------:|-----------------------------------------------------------------------------------------------------|
|  apiKey_master   | Master API key for both viewing modes. All non-set apiKeys will default to this one.                |
|  apiKey_preview  | The API key of the CaaS instance for preview viewing mode. Leave blank when providing a master key. |
|  apiKey_release  | The API key of the CaaS instance for release viewing mode. Leave blank when providing a master key. |

Configuration of the server itself is made within the `server` segment.

|      Param       | Description                                             |
|:----------------:| ------------------------------------------------------- |
|       port       | The port on which this backend service is started.      |
|     basePath     | The path on which this backend service is served.       |

## Legal Notices

The Connect for Commerce Frontend API Backend Service is a product of [Crownpeak Technology GmbH](https://www.crownpeak.com), Dortmund, Germany. The Connect for Commerce Frontend API Backend Service is subject to the Apache-2.0 license.

## Disclaimer

This document is provided for information purposes only. Crownpeak may change the contents hereof without notice. This document is not warranted to be error-free, nor subject to any other warranties or conditions, whether expressed orally or implied in law, including implied warranties and conditions of merchantability or fitness for a particular purpose. Crownpeak specifically disclaims any liability with respect to this document and no contractual obligations are formed either directly or indirectly by this document. The technologies, functionality, services, and processes described herein are subject to change without notice.