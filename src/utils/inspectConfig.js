import config from "config";
import {dirname} from "path";
import {logFinalConfig, maskedJsonString} from "./logConfig.js";
import {diffJson} from "diff";
import {highlight} from 'cli-highlight';
import chalk from "chalk";

export const logDefault = ({name, parsed}) =>
    console.log(chalk.dim(`\nDefault Configuration from ${name}\n`),
        highlight(maskedJsonString(parsed), {language: 'json', ignoreIllegals: true}));

export const logConfigDiff = ({name, parsed}, index, arr) => {
    console.log(chalk.dim(`\n${arr[index - 1].name} -> ${name}`));
    diffJson(maskedJsonString(arr[index - 1].parsed), maskedJsonString(parsed)).forEach(logDiff)
    return console.log()
};

export const logDiff = ({value, added, removed}) => {
    // green for additions, red for deletions
    // grey for common parts
    const color = added ? 'green' :
        removed ? 'red' : 'dim';

    process.stdout.write(chalk[color]?.(value))
}

export const logEnv = (arr, index) => {
    console.log(chalk.dim(`\n${chalk.red(arr[index - 1].name)} -> ${chalk.green('Overridden by Environment:')}`))

    function clearEmpties(o) {
        for (const k in o) {
            if (!o[k] || typeof o[k] !== "object") {
                continue // If null or not an object, skip to the next iteration
            }

            // The property is an object
            clearEmpties(o[k]); // <-- Make a recursive call on the nested object
            if (Object.keys(o[k]).length === 0) {
                delete o[k]; // The object had no properties, so delete that property
            }
        }
        return o;
    }

    diffJson(maskedJsonString(arr[index - 1].parsed), maskedJsonString(clearEmpties(JSON.parse(JSON.stringify(
        arr[index].parsed, (key, value) => {
            if (value?.__name)
                if (value?.__format === 'number') {
                    const envValue = Number(process.env[`${value.__name}`])
                    return isNaN(envValue) ? undefined : envValue;
                } else return process.env[`${value.__name}`]
            if (typeof value === 'string') return process.env[`${value}`];
            return value;
        }
    ))))).forEach(logDiff)
    return console.log();
};

console.log('Inspecting Configuration Sources...')

config.util.getConfigSources().forEach(({name, parsed}, index, arr) => {
    let basePath = dirname(name);
    let filename = name.split(`${basePath}/`).pop()

    if (filename?.includes('default')) return logDefault({name, parsed});
    else if (filename?.includes('custom-environment-variables')) return logEnv(arr, index);
    else logConfigDiff({name, parsed}, index, arr);
})

logFinalConfig();