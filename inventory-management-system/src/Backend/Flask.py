from flask import Flask
from flask_cors import CORS
from flask import request
from flask import render_template
from flask_restful import reqparse, abort, Api, Resource
from flask_json import FlaskJSON, JsonError, json_response, as_json

import commondatalayer
import json


app = Flask(__name__)
api = Api(app)
CORS(app, supports_credentials=True)


parser = reqparse.RequestParser()
parser.add_argument('task')

class get_all_items(Resource):
    def get(self):
        db = DatabaseController.imsdatabase()
        db.getAllItems();

    
class get_all_tops(Resource):
    def get(self):
        db = DatabaseController.imsdatabase()
        db.getAllTops();

class get_all_bottoms(Resource):
    def get(self):
        db = DatabaseController.imsdatabase()
        db.getAllBottoms();

class get_all_shoes(Resource):
    def get(self):
        db = DatabaseController.imsdatabase()
        db.getAllShoes();  

class get_all_accessories(Resource):
    def get(self):
        db = DatabaseController.imsdatabase()
        db.getAllAccessories(); 

api.add_resource(get_all_items, '/getItems')
api.add_resource(get_all_tops, '/getTops')
api.add_resource(get_all_bottoms, '/getBottoms')
api.add_resource(get_all_shoes, '/getShoes')
api.add_resource(get_all_accessories, '/getAccessories')

if __name__ = "__main__":
    app.run(debug = true)