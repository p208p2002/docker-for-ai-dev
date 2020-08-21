FROM tensorflow/tensorflow:2.3.0-gpu-jupyter
LABEL maintainer="p208p2002@gmail.com"

# 
RUN apt-get update
RUN apt-get install -y sudo \ 
                        apt-utils \
                        wget \
                        vim \
                        git \
                        curl

# ip、ping
RUN apt-get install -y net-tools \
                        iputils-ping

# ssh
RUN apt-get install -y openssh-server
RUN apt-get install -y wget
COPY config_files/ssh_config /etc/ssh/ssh_config
RUN service ssh restart

# fail2ban
RUN sudo apt-get install -y fail2ban
COPY config_files/jail.conf /etc/fail2ban/jail.conf
RUN service fail2ban restart

# script for create user
COPY script_files/docker_start.sh /docker_start.sh
RUN chmod 777 /docker_start.sh

# pytorch+cu101
RUN pip install https://download.pytorch.org/whl/cu101/torch-1.6.0%2Bcu101-cp36-cp36m-linux_x86_64.whl

# jupyter
COPY config_files/jupyter_notebook_config.py /root/.jupyter/jupyter_notebook_config.py

# avoid scp error
RUN rm /etc/bash.bashrc
RUN touch /etc/bash.bashrc

# utf-8 zh_TW
RUN apt-get install -y locales
RUN locale-gen zh_TW.UTF-8
RUN echo 'export LANGUAGE="zh_TW.UTF-8"' >> /etc/bash.bashrc
RUN echo 'export LANG="zh_TW.UTF-8"' >> /etc/bash.bashrc
RUN echo 'export LC_ALL="zh_TW.UTF-8"' >> /etc/bash.bashrc
RUN update-locale LANG=zh_TW.UTF-8

# nodejs
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN sudo apt install nodejs

# vscode-server
RUN npm install -g --unsafe-perm code-server

#
EXPOSE 22
EXPOSE 8888
EXPOSE 8080

#
ENTRYPOINT /docker_start.sh && /bin/bash
