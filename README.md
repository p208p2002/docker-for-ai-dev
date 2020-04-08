# Docker for AI DEV
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

### CMD
#### with GPU and docker 19.03+
```
$ docker run --restart=always --gpus all -itd -p SSH_PORT:22 -p JUPYTER_PORT:8888 -p VSCODE_PORT:8080 -e"NAME=..." -e"PASSWORD=..." IMAGE
```
> require docker 19.03+ & [nvidia-docker](https://github.com/NVIDIA/nvidia-docker)

#### with nvidia-docker
```
$ nvidia-docker run --restart=always -itd -p SSH_PORT:22 -p JUPYTER_PORT:8888 -p VSCODE_PORT:8080 -e"NAME=..." -e"PASSWORD=..." IMAGE
```

#### only CPU
```
$ docker run --restart=always -itd -p SSH_PORT:22 -p JUPYTER_PORT:8888 -p VSCODE_PORT:8080 -e"NAME=..." -e"PASSWORD=..." IMAGE
```

## Quick Start
choose one: CMD Generator or Manual Setting
### CMD Generator 
![Build and Deploy](https://github.com/p208p2002/docker-for-ai-dev/workflows/Build%20and%20Deploy/badge.svg?branch=site-src)
- [https://p208p2002.github.io/docker-for-ai-dev](https://p208p2002.github.io/docker-for-ai-dev)
### Manual Setting
1. follow this format `docker run [OPTIONS] IMAGE` to modify the **CMD**
2.  modify `-e"NAME=..."`,`-e"PASSWORD=..."` **for login your ssh, jupyter and vscode**
3. replace `SSH_PORT`, `JUPYTER_PORT`, `VSCODE_PORT` to the **external port** number what you want
4. replace `IMAGE` to available image tag:
    - p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode
    - p208p2002/docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode
> You can find more available image tag on this [dockerhub](https://hub.docker.com/r/p208p2002/docker-for-ai-dev/tags)
5. assign `--name=YOUR_CONTAINER_NAME` for your container, if needed.

## Web VScode Issues
- can't use `tab` in terminal
    1. at the top right of your terminal window, dropdown and set default shell to `/bin/bash`.
    2. reopen terminal
- [can't paste text to terminal](https://github.com/cdr/code-server/issues/1106)
    - try `ctrl+shift+v` or `shift+insert`
