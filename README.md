# Docker for AI DEV
Dockerfiles for quickly create remote dev env for pytorch & tensorflow

[GitHub](https://github.com/p208p2002/docker-for-ai-dev)

[DokcerHub](https://hub.docker.com/repository/docker/p208p2002/docker-for-ai-dev)

## Feature
- **jupyter**
- [**web-vscode** (code server)](https://github.com/cdr/code-server)
- ssh
- fail2ban
- pytorch
- tensorflow
- cuda support

## Quick Start
### User setting
- `-e"NAME=..."`
    - replace `...` to your username for ssh login
- `-e"PASSWORD=..."`
    - replace `...` to your password for ssh、jupyter、vscode
### Default port
- `ssh`:22
- `jupyter`:8888
- `vscode`:8080
### CMD
you can find more available **image tag** on [dockerhub](https://hub.docker.com/repository/docker/p208p2002/docker-for-ai-dev/tags?page=1)
#### with GPU and docker 19.03+
```
$ docker run --restart=always --gpus all -itd -p 22:22 -p 8888:8888 -p 8080:8080 -e"NAME=..." -e"PASSWORD=..." p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode
```
> require docker 19.03+ & [nvidia-docker](https://github.com/NVIDIA/nvidia-docker)

#### with nvidia-docker
```
$ nvidia-docker run --restart=always -itd -p 22:22 -p 8888:8888 -p 8080:8080 -e"NAME=..." -e"PASSWORD=..." p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode
```

#### only CPU
```
$ docker run --restart=always -itd -p 22:22 -p 8888:8888 -p 8080:8080 -e"NAME=..." -e"PASSWORD=..." p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode
```

## Web VScode Issues
- can't use `tab` in terminal
    1. at the top right of your terminal window, dropdown and set default shell to `/bin/bash`.
    2. reopen terminal
- [can't paste text to terminal](https://github.com/cdr/code-server/issues/1106)
    - try `ctrl+shift+v` or `shift+insert`
