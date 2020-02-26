# Docker for AI DEV
quickly create remote dev env for pytorch & tensorflow

## Feature
- **jupyter**
- [**web-vscode**](https://github.com/cdr/code-server)
- ssh
- fail2ban
- pytorch
- tensorflow
- cuda support

## Usage
### Build docker image from dockerfile
```
cd DOCKERFILE_DIR
docker build -t=TAG_NAME .
```

### Run new container
- `NAME` and `PASSWORD` is for ssh and jupyter
- spec `IMAGE_NAME` as your `TAG_NAME` that you build from dockerfile
> use `docker ps` to check external port for `SSH` and `juptyer` 

#### with GPU and docker 19.03+
```
docker run --gpus all -itd -p SSH_PORT:22 -p JUPYTER_PORT:8888 -p VSCODE_PORT:8080 --name=... -e"NAME=..." -e"PASSWORD=..." IMAGE_NAME
```
#### with nvidia-docker
```
nvidia-docker run -itd -p SSH_PORT:22 -p JUPYTER_PORT:8888 -p VSCODE_PORT:8080 --name=... -e"NAME=..." -e"PASSWORD=..." IMAGE_NAME
```
#### only CPU
```
docker run -itd -p SSH_PORT:22 -p JUPYTER_PORT:8888 -p VSCODE_PORT:8080 --name=... -e"NAME=..." -e"PASSWORD=..." IMAGE_NAME
```

## Web VScode Issues
- can't use `tab` in terminal
    1. at the top right of your terminal window, dropdown and set default shell to `/bin/bash`.
    2. reopen terminal
- [can't paste text to terminal](https://github.com/cdr/code-server/issues/1106)
    - try `ctrl+shift+v` or `shift+insert`
