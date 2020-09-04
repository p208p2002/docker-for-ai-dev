if [ -f "already_ran" ]; then
    # pass
    echo "Already ran the Entrypoint once. Holding indefinitely for debugging.";
else
    # read ENV_VAR and create user;
    useradd -m $NAME -s /bin/bash;
    sudo adduser $NAME sudo;
    echo $NAME:$PASSWORD | chpasswd;
    # change volume owner for access promise
    (chown -R $NAME:$NAME /home/$NAME/$NAME 2> /dev/null&);
fi
touch already_ran;

# Run repeat
service fail2ban start;
service ssh start;
(nohup sh -c "code-server --host 0.0.0.0 ${HOME}" 2> /dev/null&);
(nohup sh -c "jupyter notebook --allow-root --ip=0.0.0.0 --notebook-dir=${HOME}" 2> /dev/null&);