module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    overrides: [
        {
            files: [
                '*.vue',
            ],
            plugins: [
                '@typescript-eslint',
            ],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: {
                    /*
                     At least one TS script is required for this to work or you will receive the
                     following error:
                     "You have used a rule which requires parserServices to be generated. You must
                     therefore provide a value for the "parserOptions.project" property for
                     @typescript-eslint/parser."
                    */
                    '<template>': 'espree',
                    ts: '@typescript-eslint/parser',
                },
                project: ['./tsconfig.json'],
                extraFileExtensions: ['.vue'],
            },
            rules: {
                '@typescript-eslint/await-thenable': 'error',
            },
        },
    ],
}
