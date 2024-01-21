# welcome to unispace repo

# quick start guide

as this project consists of two parts: CLIENT (frontend) and SERVER (backend), you need to be able to run both in order to test / develop properly.

## before you start:

you need

1. `.env` file in your root directory of the project, containing secret keys for the server instance. Consult one of the team members for the content of the file. Not included in the repo as it is in fact secret.

2. Swap out `db.sqlite3` file in the `server` directory with file containing useful dummy data. Though this is not necessary, you may find it helpful to test your code. Again, consult one of the team members for the file.

## to run the server:

```bash
# in this project's root directory

# install and source virtual environment
pip3 install virtualenv
virtualenv myenv
# TROUBLESHOOT (mac):
# if you see virtualenv command not fount error, try:
# python3 -m virtualenv myenv
# may not be the best way to solve this, but found it working
source myenv/bin/activate

# install django
pip3 install django

# install packages
pip3 install -r requirements.txt

# now cd into the server directory
cd server

# migrate db
python manage.py makemigrations
python manage.py migrate

# run server
python manage.py runserver
```

you should now see the server running on your terminal. Follow the next step on another terminal instance.

## to run the client:

```bash
# make sure you're in the client directory

# install packages
npm install

npm start
```

you are now good to develop away :)
