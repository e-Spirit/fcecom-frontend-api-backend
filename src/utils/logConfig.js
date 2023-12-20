import joi from "joi";
import chalk from "chalk";
import {highlight} from 'cli-highlight';
import config from "config";

export const maskedJsonString = (json) =>
    JSON.stringify(json, (key, value) => {
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
            const {value: resultValue, error} = joi.string().guid().validate(value, {abortEarly: false});
            if (resultValue && !error) return hideApiKey();

            return value;
        }

        return value;
    }, 2)

export const logFinalConfig = () =>
    console.log(chalk.dim(`\nFinal Configuration\n`), highlight(maskedJsonString(config), {language: 'json', ignoreIllegals: true}));