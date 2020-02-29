# Docker for AI DEV
Dockerfiles for quickly create remote dev env for pytorch & tensorflow

[https://github.com/p208p2002/docker-for-ai-dev](https://github.com/p208p2002/docker-for-ai-dev)

## Feature
- **jupyter**
- [**web-vscode**](https://github.com/cdr/code-server)
- ssh
- fail2ban
- pytorch
- tensorflow
- cuda support

## Quick Start
#### with GPU
```
$ export SSH_PORT=22
$ export JUPYTER_PORT=8888
$ export VSCODE_PORT:8080
$ export SSH_USER=**SET WHAT YOU WANT**
$ export PASSWORD=**SET WHAT YOU WANT**
$ docker run --restart=always --gpus all -itd -p ${SSH_PORT}:22 -p ${JUPYTER_PORT}:8888 -p ${VSCODE_PORT}:8080 -e"NAME=${SSH_USER}" -e"PASSWORD=${PASSWORD}" p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode
```
#### only CPU
```
$ docker run --restart=always -itd -p 22:22 -p 8888:8888 -p 8080:8080 -e"NAME=..." -e"PASSWORD=..." p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode
```

## Usage
### Get docker image
Choose one to get image
#### Pull from dockerhub
[https://hub.docker.com/repository/docker/p208p2002/docker-for-ai-dev/tags?page=1](https://hub.docker.com/repository/docker/p208p2002/docker-for-ai-dev/tags?page=1)
#### Build from dockerfile
```
cd DOCKERFILE_DIR
docker build -t=TAG_NAME .
```

### Run container from image
- `NAME` and `PASSWORD` is for ssh and jupyter
- spec `IMAGE_NAME` as your `TAG_NAME` that you build from dockerfile
> use `docker ps` to check external port for `SSH` and `juptyer` 

#### with GPU and docker 19.03+
```
docker run --restart=always --gpus all -itd -p SSH_PORT:22 -p JUPYTER_PORT:8888 -p VSCODE_PORT:8080 --name=... -e"NAME=..." -e"PASSWORD=..." IMAGE_NAME
```
#### with nvidia-docker
```
nvidia-docker run --restart=always -itd -p SSH_PORT:22 -p JUPYTER_PORT:8888 -p VSCODE_PORT:8080 --name=... -e"NAME=..." -e"PASSWORD=..." IMAGE_NAME
```
#### only CPU
```
docker run --restart=always -itd -p SSH_PORT:22 -p JUPYTER_PORT:8888 -p VSCODE_PORT:8080 --name=... -e"NAME=..." -e"PASSWORD=..." IMAGE_NAME
```

## Web VScode Issues
- can't use `tab` in terminal
    1. at the top right of your terminal window, dropdown and set default shell to `/bin/bash`.
    2. reopen terminal
- [can't paste text to terminal](https://github.com/cdr/code-server/issues/1106)
    - try `ctrl+shift+v` or `shift+insert`
