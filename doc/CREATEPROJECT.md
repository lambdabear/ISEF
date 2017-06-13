## How to create react native project

* [install create-react-native-app](#install-create-react-native-app)
* [create project](#create-project)
* [install eslint](#install-eslint)
* [install prettier](#install-prettier)
* [install flow](#install-flow)
* [install atom plugins](#install-atom-plugins)


### Install create-react-native-app
```bash
yarn add -g create-react-native-app
```

### Create Project
```bash
create-react-native-app your-app-project
```

### Install eslint
```bash
cd your-app-project
yarn add --dev eslint
```
ESlint requires configuration placed inside .eslintrc file, or under “eslintConfig” property in your package.json. If you don’t want to spend time defining all the rules for your project, I recommend the eslint-config-airbnb package, which contains very good rules for writing good React applications. Here’s how it’s done:
```bash
npm info "eslint-config-airbnb@latest" peerDependencies
```
Now you should see peerDependencies versions listed within a JS object inside your console. Simply replace the hashes in the version and run:
```bash
yarn add eslint-config-airbnb eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# --dev
```
Within the configuration file, create an “extend” key and add airbnb to an array of extensions, and you’re ready to go!
```json
"extends": ["airbnb"]
```

### Install prettier
```bash
yarn add --dev prettier eslint-config-prettier
```
When prettier is available in your project you can add a new script to your npm scripts in package.json; the entry could look like this:
```
"scripts": {
  ...
  "prettier": "prettier --single-quote --trailing-comma all --write \"src/**/*.js\""
},
```
Prettier plays along with ESlint very well — it provides some eslint presets, so if you’re using them both, don’t forget to add extensions, just like you did with the airbnb preset:
```json
"extends": [
  "airbnb",
  "prettier",
  "prettier/flowtype",
  "prettier/react"
],
```

### Install flow
```bash
yarn add --dev flow-bin babel-eslint eslint-plugin-flowtype
```
To perform typecheck in your app just add the script to your package.json
```
"scripts": {
  ...
  "flow": "flow",
},
```
Download [recommended.json](https://raw.githubusercontent.com/gajus/eslint-plugin-flowtype/master/src/configs/recommended.json) in your project direction.
To enable this configuration use the extends property in your .eslintrc config file:
```json
{
  "extends": [
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "flowtype"
  ]
}
```
Settings onlyFilesWithFlowAnnotation.
When true, only checks files with a @flow annotation in the first comment.
```json
{
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
}
```

### Install atom plugins
```bash
apm install linter-eslint prettier-atom react
```
