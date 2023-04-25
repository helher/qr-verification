# This file will be used to store our database model. 
from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func

# Schema for notes
class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(10000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    # One-to-many relationship (one user can have multiple notes)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

# Schema for users
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    notes = db.relationship('Note')