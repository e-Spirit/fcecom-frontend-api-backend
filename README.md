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
3. Use the **config/example.yml** template to create a **config/local.yaml** file.
4. Run `npm start` to start the service or `npm run start:watch` to enable live reload.
5. The status of the service can be observed via the `/` route.

## Configuration

### Files

We provide a default configuration under `config/example.yml`. We suggest creating a copy of it and name it `local.yml` for development.

For use in production or just in other environments you have the ability to create separate files. The loading order is managed by the `config`
package we use. Learn more in [the packages' documentation](https://github.com/node-config/node-config/wiki/Configuration-Files#file-load-order).

Alternatively you can override all or just single values with environment variables.
You can either add them to your `.bashrc` file or export them for the current shell and all processes like this:
`export DEFAULT_LOCALE="de_DE"`. All values not supplied via environment variables keep their values from the files.

We provide an overview of all available values in the `config/example.yml`. For further information see the descriptions in the table below.

### Project

Configuration of the FirstSpirit related part of the Frontend API module is made within the `core.project` segment of the configuration
files.

|           Param            |         Environment          | Description                                                                        |
|:--------------------------:|:----------------------------:|:-----------------------------------------------------------------------------------|
|    navigationServiceURL    |    NAVIGATION_SERVICE_URL    | The URL of the navigation service.                                                 |
|          caasURL           |           CAAS_URL           | The URL of the CaaS instance.                                                      |
|         projectID          |          PROJECT_ID          | The ID of the CaaS project.                                                        |
|          tenantID          |          TENANT_ID           | The tenant ID of the CaaS project.                                                 |
| removeUntranslatedSections | REMOVE_UNTRANSLATED_SECTIONS | Whether untranslated sections should be filtered out (optional, default is false). |

### Remotes

Configuring FristSpirit Remote Projects is handled by the `core.project.remotes` entry. It is an object with the symbolic name of the remote project as key and an object containing the following fields as a value.

More information about the remote configuration can be found in the [JavaScript Content API Library readme](https://github.com/e-Spirit/javascript-content-api-library#constructor).

<div class="warning" style='padding:0.1em; background-color:#eeeeee; color:#69337A'>
<span>
<p style='margin-top:1em; text-align:center'>
<b>Attention</b></p>
<p style='margin-left:1em;'>
Currently, the underlying Content API can only work with the master language of the remote media project. You also need to provide a CaaS API key with read permissions to both projects.
</p>
</span>
</div>

| Param  | Description                               |
|:------:|-------------------------------------------|
|   id   | The ID of the FirstSpirit remote project  |
| locale | The master language of the remote project |

How to configure via Environment Variables

The "symbolic name" can be any unique string. E.g. use the symbolic name of the remote project.

Add the following to your `custom-environment-variables.yml`:

```yml
# Specify projects with referenced media objects.
core:
  project:
    # ...
    remotes:
      symbolic_name:
        # The ID of the FirstSpirit remote project
        id: MEDIA_ID
    
        # The master language of the remote project
        locale: MEDIA_LOCALE
    # ...
```

### Core

Core configuration is made within the `core` segment inside the core config.

|     Param      |   Environment    | Description                                                                                                                             |
|:--------------:|:----------------:|-----------------------------------------------------------------------------------------------------------------------------------------|
| fsServerOrigin | FS_SERVER_ORIGIN | The base URL of the server running the Content Creator.                                                                                 |
| defaultLocale  |  DEFAULT_LOCALE  | A fallback locale used if any request is received without explicit locale. Has to have format like in '`de_DE`'                         |
|    logLevel    |    LOG_LEVEL     | Numeric representation of logLevels:<ul><li>DEBUG = 0</li><li>INFO = 1</li><li>WARNING = 2</li><li>ERROR = 3</li><li>NONE = 4</li></ul> |

### API Keys

Configuration of the API keys is made within the `core.project.apiKey` segment inside the core config.

It is recommended to define one API key for the preview mode, applicable to both the main project and, if applicable, any other remote project. The same principle applies to the release key.
In summary, one API key is needed for the preview and another for the release mode.

Please note that, despite its name, the master key only acts as a fallback. It is always overridden by a set preview or release key.

|     Param      | Environment | Description                                                                                         |
|:--------------:|:-----------:|-----------------------------------------------------------------------------------------------------|
| apiKey_master  | MASTER_KEY  | Master API key for both viewing modes. It is used for both viewing modes and acts as a fallback when either the preview key or the release key is not provided.
| apiKey_preview | PREVIEW_KEY | The API key of the CaaS instance for preview viewing mode. Leave blank when providing a master key. |
| apiKey_release | RELEASE_KEY | The API key of the CaaS instance for release viewing mode. Leave blank when providing a master key. |

### Server

Configuration of the server itself is made within the `server` segment.

|  Param   | Environment | Description                                        |
|:--------:|:-----------:|----------------------------------------------------|
|   port   |    PORT     | The port on which this backend service is started. |
| basePath |  BASE_PATH  | The path on which this backend service is served.  |

### SSL

SSL configuration is made within the `ssl` segment inside the server config. SSL is disabled by default.

| Param   | Environment   | Description                                                                                     |
|---------|---------------|-------------------------------------------------------------------------------------------------|
| enabled | USE_SSL       | Whether to use SSL or not.                                                                      |
| key     | SSL_KEY_PATH  | Path to the SSL Key file, either absolute or relative to the current working directory.         |
| cert    | SSL_CERT_PATH | Path to the SSL Certificate file, either absolute or relative to the current working directory. |

### Interactive Documentation (Swagger UI)

The interactive documentation is not enabled by default for security reasons. It can be configured within the server.docs segment of the configuration files.

|  Param   |  Environment   | Description                                   |
|:--------:|:--------------:|:----------------------------------------------|
| enabled  |   SERVE_DOCS   | Whether to serve Swagger UI                   |
| basePath | DOCS_BASE_PATH | Path on which the Swagger UI should be served |

### Troubleshooting

If the configuration is doing things you don't expect, it might be that the actual config values are coming from a different source and are overwriting your target changes.
To find out which configuration source is being used and which values are being overwritten, we provide an npm script.

```bash
npm run config:inspect
```

This shows all configuration sources detected and the changes between each overriding stage.

### Multi-Tenant Support
We provide an example `Dockerfile` and `docker-compose.yml` to enable multi-tenant support for this service.

Compile the code:
```
npm i
npm run build
```

Build and tag the Docker image with a custom name and version:
```docker
docker build -t <IMAGE_NAME>:<VERSION> .
```

The `docker-compose.yml` demonstrates how to define multiple instances of the Frontend API Backend with a different configuration.

Replace `<IMAGE_NAME>:<VERSION>` with the name and tag that you chose for your Docker image.
You can set environment variables directly with the `environment` attribute for each configuration of an instance. Replace the values with the correct credentials.

Start the containers:
```docker
docker compose up -d
```

Stop the containers:
```docker
docker compose down
```

Please be aware that the Docker containers need to be accessible from your FirstSpirit instance in order to work with the Connect for Commerce module. A deployment to a Cloud provider might be necessary for this.

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