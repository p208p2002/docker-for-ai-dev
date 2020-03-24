if [ -f "already_ran" ]; then
    # pass
    echo "Already ran the Entrypoint once. Holding indefinitely for debugging.";
else
    # read ENV_VAR and create user;
    useradd -m $NAME -s /bin/bash;
    sudo adduser $NAME sudo;
    echo $NAME:$PASSWORD | chpasswd;
    # set root home as user home
    echo HOME=/home/${NAME} >> /etc/environment;
    source /etc/environment;
    echo "cd ${HOME}" >> /root/.bashrc;
    cp /root/.bashrc /home/${NAME}/
    # jupyter config
    rm -rf /home/${NAME}/.jupyter;
    mkdir /home/${NAME}/.jupyter;
    cp /root/.jupyter/jupyter_notebook_config.py /home/${NAME}/.jupyter/''
fi
touch already_ran;

# Run repeat
source /etc/environment;
service fail2ban start;
service ssh start;
(nohup sh -c "/code-server2.1698-vsc1.41.1-linux-x86_64/code-server --host 0.0.0.0 /home/${NAME}" 2> /dev/null&);
(nohup sh -c "jupyter notebook --allow-root --ip=0.0.0.0 --notebook-dir=/home/${NAME}" 2> /dev/null&);