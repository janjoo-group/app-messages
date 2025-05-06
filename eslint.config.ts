import { defineConfig } from "eslint/config";
import tsParser from '@typescript-eslint/parser';
import stencilEslint from '@stencil/eslint-plugin';
import reactEslint from 'eslint-plugin-react';
import prettierEslint from 'eslint-plugin-prettier';

export default defineConfig([
    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd(),
                ecmaVersion: 2022,
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            stencilEslint,
            reactEslint,
            prettierEslint,
        },
        rules: {
            ...stencilEslint.configs.flat.recommended.rules,
            'prettier/prettier': 'warn',
            'react/jsx-no-bind': 'off',
        },
    },
]);