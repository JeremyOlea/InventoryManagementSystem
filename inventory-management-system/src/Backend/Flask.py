from flask import Flask
from flask_cors import CORS as CORS
from flask import request
from flask import render_template
from flask_restful import reqparse, abort, Api, Resource
from flask_json import FlaskJSON, JsonError, json_response, as_json

import DatabaseController
import json


app = Flask(__name__)
api = Api(app)
CORS(app, supports_credentials=True)


parser = reqparse.RequestParser()
parser.add_argument('task')

class get_all_items(Resource):
    def get(self):
        db = DatabaseController.imsdatabase()
        return db.getAllItems();

    
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

class hello_world(Resource):
    def get(self):
        return {'hello' : 'hello world'}

class check_login(Resource):
    def post(self):
        db = DatabaseController.imsdatabase()
        data = request.get_json()
        print(data)
        retval = db.checkLogin(data['email'], data['password'])
        return retval;

api.add_resource(get_all_items, '/getItems')
api.add_resource(get_all_tops, '/getTops')
api.add_resource(get_all_bottoms, '/getBottoms')
api.add_resource(get_all_shoes, '/getShoes')
api.add_resource(get_all_accessories, '/getAccessories')
api.add_resource(hello_world, '/HelloWorld')
api.add_resource(check_login, '/checkLogin')

if __name__ == "__main__":
    app.run()