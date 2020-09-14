if [ -f "already_ran" ]; then
    # pass
    echo "Already ran the Entrypoint once. Holding indefinitely for debugging.";
else
    # read ENV_VAR and create user;
    useradd -m $NAME -s /bin/bash;
    sudo adduser $NAME sudo;
    echo $NAME:$PASSWORD | chpasswd;
    # change volume owner for access promise
    if [ -d "/user_data" ]; then 
        # volume exists" 
        chown -R $NAME:$NAME /user_data
        # change HOME dir for user
        usermod -d /user_data $NAME
        cp /etc/skel/.bashrc /user_data
        cp /etc/skel/.profile /user_data
        #
        mkdir /user_data/.jupyter
        cp /root/.jupyter/jupyter_notebook_config.py /user_data/.jupyter/jupyter_notebook_config.py
        chmod -R 775 /user_data/.jupyter
    fi
fi
touch already_ran;

# Run repeat
service fail2ban start;
service ssh start;
SERVICE_HOME = '/'
if [ -d "/user_data" ]; then 
    # volume exists" 
    SERVICE_HOME = '/user_data'
fi
(nohup runuser -l $NAME -c "export PASSWORD=$PASSWORD&&export SHELL=/bin/bash&&code-server --host 0.0.0.0 $SERVICE_HOME" 2> /dev/null&);
(nohup runuser -l $NAME -c "export PASSWORD=$PASSWORD&&jupyter notebook --ip=0.0.0.0 --notebook-dir=$SERVICE_HOME" 2> /dev/null&);
