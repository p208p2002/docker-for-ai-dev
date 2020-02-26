# setting jupyter pwd;
sed -i '$ d' /root/.jupyter/jupyter_notebook_config.py;
echo -e "c.NotebookApp.token = \x22${PASSWORD}\x22" >> /root/.jupyter/jupyter_notebook_config.py;
# read ENV_VAR and create user;
useradd -m $NAME -s /bin/bash;
sudo adduser $NAME sudo;
echo $NAME:$PASSWORD | chpasswd;