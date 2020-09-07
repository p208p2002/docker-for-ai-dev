# Docker for AI DEV ![Build and Publish](https://github.com/p208p2002/docker-for-ai-dev/workflows/Build%20and%20Publish/badge.svg)
Dockerfiles for quickly create remote dev env for pytorch & tensorflow

[GitHub](https://github.com/p208p2002/docker-for-ai-dev)

[DokcerHub](https://hub.docker.com/r/p208p2002/docker-for-ai-dev)

## Feature
- **jupyter**
- [**web-vscode** (code server)](https://github.com/cdr/code-server)
- ssh
- fail2ban
- pytorch
- tensorflow
- cuda support

## Demo
![Demo Animation](../assets/demo.gif?raw=true)

## Usage
choose one: CLI Tool or CMD Generator

### CLI Tool **recommand**
- [p208p2002/docker-for-ai-dev-cli](https://github.com/p208p2002/docker-for-ai-dev-cli)

### CMD Generator ![Build and Deploy](https://github.com/p208p2002/docker-for-ai-dev/workflows/Build%20and%20Deploy/badge.svg?branch=site-src)
- [https://p208p2002.github.io/docker-for-ai-dev](https://p208p2002.github.io/docker-for-ai-dev)

## Web VScode Issues
- can't use `tab` in terminal
    1. at the top right of your terminal window, dropdown and set default shell to `/bin/bash`.
    2. reopen terminal
- [can't paste text to terminal](https://github.com/cdr/code-server/issues/1106)
    - try `ctrl+shift+v` or `shift+insert`
