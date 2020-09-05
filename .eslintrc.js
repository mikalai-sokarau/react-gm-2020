module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    rules: {
        'no-restricted-imports': ['error', {
            patterns: [ './*', '../*' ]
        }],
        'react/prop-types': 0,
    }
};
