FROM tensorflow/tensorflow:2.1.0-gpu-py3-jupyter
LABEL maintainer="p208p2002@gmail.com"

# 
RUN apt-get update
RUN apt-get install -y sudo \ 
                        apt-utils \
                        default-jdk \
                        wget \
                        vim \
                        git

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
COPY script_files/create_user.sh /create_user.sh
RUN chmod 777 /create_user.sh

# pytorch
RUN wget https://download.pytorch.org/whl/cu100/torch-1.3.0%2Bcu100-cp36-cp36m-linux_x86_64.whl
RUN pip install torch-1.3.0+cu100-cp36-cp36m-linux_x86_64.whl
RUN rm torch-1.3.0+cu100-cp36-cp36m-linux_x86_64.whl

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

# vscode-server
ADD code-server2.1698-vsc1.41.1-linux-x86_64.tar.gz /
RUN chmod 777 /code-server2.1698-vsc1.41.1-linux-x86_64/code-server

#
EXPOSE 22
EXPOSE 8888
EXPOSE 8080

#
ENTRYPOINT /create_user.sh && service fail2ban start && service ssh start && (nohup /code-server2.1698-vsc1.41.1-linux-x86_64/code-server --host 0.0.0.0  2> /dev/null&) &&(nohup jupyter notebook --allow-root --ip=0.0.0.0 2> /dev/null&)&& /bin/bash