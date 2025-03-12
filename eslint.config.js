import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		languageOptions: {
			globals: globals.browser,
		},
    env: {
      jest: true, 
    },
		rules: {
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
		},
    extends: [
      'eslint:recommended',
      'plugin:jest/recommended', // Рекомендуемые правила для Jest
    ],
    plugins: ['jest'],
	},
	pluginJs.configs.recommended,
];
