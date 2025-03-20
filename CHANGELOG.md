## [2.8.0](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.7.1...v2.8.0) (2025-03-20)

### Changes

* Added the ability to change the standard form field names for ShopID and PageType.
* Updated fcecom-frontend-api-server to v1.5.0.

## [2.7.1](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.7.0...v2.7.1) (2025-02-19)

### Changes
* Updated fcecom-frontend-api-server to v1.4.3.

## [2.7.0](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.6.7...v2.7.0) (2025-02-05)

### Changes
* Added a new ShareView feature that enables secure sharing of preview content outside of the ContentCreator.

### UPDATE NOTICE

ShareView is a mode of the Frontend API ecosystem that allows users to preview content outside the ContentCreator without requiring it to be released in FirstSpirit.

This feature involves a token generation process that grants users access to a generated token, enabling them to view preview content from the Frontend API Backend or a similar implementation of the Frontend API Server package.

While the functionality works out of the box, some configuration steps are required to enable this view. Refer to the [Frontend API documentation](https://docs.e-spirit.com/ecom/fsconnect-com-api/fsconnect-com-frontend-api/latest/share-view/).

## [2.6.7](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.6.6...v2.6.7) (2025-01-09)

### Changes
* Updated fcecom-frontend-api-server to v1.3.2.

## [2.6.6](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.6.5...v2.6.6) (2024-12-20)

### Changes
* Updated fcecom-frontend-api-server to v1.3.1.

## [2.6.5](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.6.4...v2.6.5) (2024-10-22)

### Changes
* Updated fcecom-frontend-api-server to v1.3.0.

## [2.6.4](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.6.3...v2.6.4) (2024-10-16)

### Changes
* Fixed security vulnerabilities by updating the relevant dependencies.
* Updated fcecom-frontend-api-server to v1.2.1.

## [2.6.3](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.6.2...v2.6.3) (2024-10-09)

### Changes
* Updated fcecom-frontend-api-server to v1.2.0.

## [2.6.2](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.6.1...v2.6.2) (2024-10-09)

### Changes
* Added information on best practices for the use of API keys.

## [2.6.1](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.6.0...v2.6.1) (2024-07-10)

### Changes
* Updated fcecom-frontend-api-server to v1.1.0.

## [2.6.0](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.5.0...v2.6.0) (2024-06-05)

### Changes
* A status page has been added that summarizes information about the version in use and some configurations.
* The status page is accessible via the '/' route.
* Updated fcecom-frontend-api-server to v1.0.1.

## [2.5.0](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.4.0...v2.5.0) (2024-05-17)

### Changes
* Added the ability to configure FirstSpirit remote projects.
* Updated fcecom-frontend-api-server to v1.0.0.

## [2.4.0](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.3.0...v2.4.0) (2024-03-22)

### Changes
* The description of the use of environment variables has been corrected.
* Updated fcecom-frontend-api-server to v0.25.0.

## [2.3.0](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.2.0...v2.3.0) (2024-02-12)

### Changes
* Changed used programming language to TypeScript.
* Added SSL support.
* Improved Dockerfile.
* Updated fcecom-frontend-api-server to v0.24.0.

## [2.2.0](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.1.0...v2.2.0) (2024-01-30)

### Changes
* Updated fcecom-frontend-api-server to v0.23.0.

## [2.1.0](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.0.1...v2.1.0) (2024-01-22)

### Changes
* Added configuration to filter untranslated sections.
* Added template for multi-tenant support with Docker Compose.
* Updated fcecom-frontend-api-server to v0.22.0.

### UPDATE NOTICE
* If the filter for untranslated sections is enabled in the Frontend API Backend configuration, the "Add content" button is rendered if there is no content for the section for the current language. Please note that the input components of the section templates must be language-dependent, otherwise this can lead to undesirable side effects.

## [2.0.1](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v2.0.0...v2.0.1) (2023-12-21)

### Changes
* Updated fcecom-frontend-api-server to v0.20.0.

## [2.0.0](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v1.6.11...v2.0.0) (2023-12-20)

### Changes
* Optimization of config validation.
* Updated fcecom-frontend-api-server to v0.19.0.

### UPDATE NOTICE
* During the implementation of this feature, the Frontend API backend has been switched to ES modules and expects the server package to contain the correct file extensions for the bundles. This is a breaking change and only compatible with Frontend API server package >= 0.19.0.

## [1.6.11](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v1.6.10...v1.6.11) (2023-12-02)

### Changes
* Updated fcecom-frontend-api-server to v0.18.0.

## [1.6.10](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v1.6.9...v1.6.10) (2023-11-27)

### Changes
* Updated fcecom-frontend-api-server to v0.17.0.

## [1.6.9](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v1.6.8...v1.6.9) (2023-11-16)

### Changes
* Updated fcecom-frontend-api-server to v0.16.0.

## [1.6.8](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v1.6.7...v1.6.8) (2023-11-02)

### Changes
* Updated fcecom-frontend-api-server to v0.15.0.

## [1.6.7](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v1.6.6...v1.6.7) (2023-10-25)

### Changes
* Updated fcecom-frontend-api-server to v0.13.1.

## [1.6.6](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v1.6.5...v1.6.6) (2023-10-06)

### Changes
* Updated fcecom-frontend-api-server to v0.13.0.

## [1.6.5](https://github.com/e-Spirit/fcecom-frontend-api-backend/compare/v1.6.4...v1.6.5) (2023-09-08)

### Changes
* Updated fcecom-frontend-api-server to v0.12.1.


Information on previous releases can be found in the [Release Notes](https://docs.e-spirit.com/ecom/fsconnect-com/FirstSpirit_Connect_for_Commerce_Releasenotes_EN.html).
