# Docker for AI DEV
dockerfiles for quickly create dev env with pytorch & tensorflow

## Feature
- **jupyter**
- **web-vscode**
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
