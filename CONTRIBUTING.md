# Contributing guideline

Based on Typescript + Material-UI.  

## Quick start

```shell
yarn install
yarn start
```

## Coding  

vscode lastest version.

vscode extensions:  

- ESLint  
- Prettier - Code formatter  
- TypeScript Import Sorter  

vscode settings: `settings.json`  

```json
{
  "files.insertFinalNewline": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
