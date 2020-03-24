if [ -f "already_ran" ]; then
    # pass
    echo "Already ran the Entrypoint once. Holding indefinitely for debugging.";
else
    # setting jupyter pwd;
    sed -i '$ d' /root/.jupyter/jupyter_notebook_config.py;
    echo -e "c.NotebookApp.token = \x22${PASSWORD}\x22" >> /root/.jupyter/jupyter_notebook_config.py;
    # read ENV_VAR and create user;
    useradd -m $NAME -s /bin/bash;
    sudo adduser $NAME sudo;
    echo $NAME:$PASSWORD | chpasswd;
fi
touch already_ran;

# Run repeat
service fail2ban start;
service ssh start;
(nohup /code-server2.1698-vsc1.41.1-linux-x86_64/code-server --host 0.0.0.0 /home/${NAME} 2> /dev/null&);
(nohup jupyter notebook --allow-root --ip=0.0.0.0 --notebook-dir=/home/${NAME} 2> /dev/null&);