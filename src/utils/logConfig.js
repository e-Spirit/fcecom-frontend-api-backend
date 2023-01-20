const joi = require('joi');
const highlight = require('cli-highlight').highlight;

module.exports = {
  logConfig: (config) => {
    const configJson = JSON.stringify(
      config,
      (key, value) => {
        if (typeof value === 'string') {
          const hideApiKey = () => `${value.substring(0, 7)}...${value.substring(25, 36)}`;

          // Fallback to known fields for the case the GUID check fails
          switch (key) {
            case 'master':
            case 'preview':
            case 'release':
              return hideApiKey();
            case 'projectID':
              return value; // White-labelling projectID field
          }

          // Checks if String is a GUID, therefore testing for API keys
          const { value: resultValue, error } = joi.string().guid().validate(value, { abortEarly: false });
          if (resultValue && !error) return hideApiKey();
        }

        return value;
      },
      2
    );

    const highlightConfiguration = { language: 'json', ignoreIllegals: true };
    console.log(`\nConfiguration loaded:\n${highlight(configJson, highlightConfiguration)}`);
  },
};
