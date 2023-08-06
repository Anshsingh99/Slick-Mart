run the following commands to start the server

python manage.py makemigrations

python manage.py migrate

python manage.py runserver

API ENDPOINTS:-

Get all products :- 127.0.0.1:8000/slickmart/products/get
 
To add a product :- 127.0.0.1:8000/admin
(note that you need to first create a user to access the admin page which can be done by running:
python manage.py createsuperuser)
