# Going to make the website folder a Python package. 
# Essentially, it means that we can import this folder (and whatever is inside this __init__.py file) will run automatically. 

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager

# Define (initialise) new database
db = SQLAlchemy()
DB_NAME = "database.db"

# Initialise Flask
def create_app():
    app = Flask(__name__)

    # Encrypt (or secure) the cookies and session data related to the website. Please note, in production, never share the secret key. 
    app.config['SECRET_KEY'] = 'i2%hHw%Q5kOE#9@lb8QXGGiqtq#)QN'

    # Tell Flask that we are using the database and where the database is going to be located. Here, we need a file. 
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)

    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    from .models import User, Note

    with app.app_context():
        db.create_all()

    
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    return app

def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all(app=app)
        print('Created database!')