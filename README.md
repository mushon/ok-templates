# Open-Knesset Templates

Templates and Static HTML & CSS for Open Knesset Redesign

## Setting your repository

This repo has a submodule pointing to a version of Twitter Bootstrap with RTL support.

Start by forking this repo to your own Github account and then run:
```
$ git clone git@github.com:YOUR_ACCOUNT/ok-templates.git
$ cd ok-templates
$ git submodule init
$ git submodule update
```

## Installing LESS

You'll need Node.js and NPM installed on your machine

```
$ npm install -g less
```

## Compiling your LESS files

You should compile less/app.less to css/app.css

To do so, cd into the project's directory and run:

```
$ lessc less/app.less css/app.css
```

If you're running Mac OS X, you can use [Less.app](http://incident57.com/less/) to automatically watch your LESS files for changes and compile them.

If you're using WebStorm, you can use the [LESS Compiler](http://plugins.intellij.net/plugin?pr=idea&pluginId=7059) plugin to automatically compile LESS files.
