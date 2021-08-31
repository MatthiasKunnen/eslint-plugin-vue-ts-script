# eslint-plugin-vue error
Eslint plugin vue has an issue with customer parsers and vue files without TypeScript script.
See <https://github.com/vuejs/vue-eslint-parser/issues/104>.

## How to test
1. `yarn install --frozen-lockfile`
1. `yarn run lint`

## The error
```
Error: Error while loading rule '@typescript-eslint/await-thenable': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
Occurred while linting /src/error.vue
    at Object.getParserServices (/node_modules/@typescript-eslint/experimental-utils/dist/eslint-utils/getParserServices.js:16:15)
    at create (/node_modules/@typescript-eslint/eslint-plugin/dist/rules/await-thenable.js:41:37)
    at Object.create (/node_modules/@typescript-eslint/experimental-utils/dist/eslint-utils/RuleCreator.js:13:24)
    at createRuleListeners (/node_modules/eslint/lib/linter/linter.js:761:21)
    at /node_modules/eslint/lib/linter/linter.js:931:31
    at Array.forEach (<anonymous>)
    at runRules (/node_modules/eslint/lib/linter/linter.js:876:34)
    at Linter._verifyWithoutProcessors (/node_modules/eslint/lib/linter/linter.js:1175:31)
    at Linter._verifyWithConfigArray (/node_modules/eslint/lib/linter/linter.js:1273:21)
    at Linter.verify (/node_modules/eslint/lib/linter/linter.js:1228:25)

```
