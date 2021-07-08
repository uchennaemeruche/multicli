multicli
========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/multicli.svg)](https://npmjs.org/package/multicli)
[![CircleCI](https://circleci.com/gh/uchennaemeruche/multicli/tree/master.svg?style=shield)](https://circleci.com/gh/uchennaemeruche/multicli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/multicli.svg)](https://npmjs.org/package/multicli)
[![License](https://img.shields.io/npm/l/multicli.svg)](https://github.com/uchennaemeruche/multicli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g multicli
$ multicli COMMAND
running command...
$ multicli (-v|--version|version)
multicli/0.1.0 win32-x64 node-v14.7.0
$ multicli --help [COMMAND]
USAGE
  $ multicli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`multicli hello`](#multicli-hello)
* [`multicli help [COMMAND]`](#multicli-help-command)

## `multicli hello`

Describe the command here

```
USAGE
  $ multicli hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/uchennaemeruche/multicli/blob/v0.1.0/src/commands/hello.js)_

## `multicli help [COMMAND]`

display help for multicli

```
USAGE
  $ multicli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
