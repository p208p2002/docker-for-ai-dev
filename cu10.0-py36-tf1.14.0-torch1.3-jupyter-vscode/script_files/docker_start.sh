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
    fi
fi
touch already_ran;

# Run repeat
service fail2ban start;
service ssh start;
if [ -d "/user_data" ]; then 
    # volume exists" 
    (nohup sh -c "code-server --host 0.0.0.0 /user_data" 2> /dev/null&);
    (nohup sh -c "jupyter notebook --allow-root --ip=0.0.0.0 --notebook-dir=/user_data" 2> /dev/null&);
else
    (nohup sh -c "code-server --host 0.0.0.0 ${HOME}" 2> /dev/null&);
    (nohup sh -c "jupyter notebook --allow-root --ip=0.0.0.0 --notebook-dir=${HOME}" 2> /dev/null&);
fi
