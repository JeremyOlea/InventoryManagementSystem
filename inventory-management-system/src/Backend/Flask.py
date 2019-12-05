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
        return db.getAllTops();

class get_all_bottoms(Resource):
    def get(self):
        db = DatabaseController.imsdatabase()
        return db.getAllBottoms();

class get_all_shoes(Resource):
    def get(self):
        db = DatabaseController.imsdatabase()
        return db.getAllShoes();  

class get_all_accessories(Resource):
    def get(self):
        db = DatabaseController.imsdatabase()
        return db.getAllAccessories(); 

class hello_world(Resource):
    def get(self):
        return {'hello' : 'hello world'}

class register_user(Resource):
    def post(self):
        data = request.get_json()
        db = DatabaseController.imsdatabase()
        db.addNewUser(None, data['firstName'], data['lastName'], data['address'], data['email'], data['password'])
        return "success";
        
class add_purchase(Resource):
    def post(self):
        data = request.get_json()
        db = DatabaseController.imsdatabase()
        db.addPurchase(None, data['ItemID'], data['UserID'], data['Date'], data['Quantity'])
        return "success"

class get_purchases(Resource):
    def post(self):
        data = request.get_json()
        db = DatabaseController.imsdatabase()
        return db.getPurchases(data['uid'])

class get_item_by_id(Resource):
    def post(self):
        data = request.get_json()
        db = DatabaseController.imsdatabase()
        return db.getItemById(data['itemId'])

class validate_user(Resource):
    def post(self):
        data = request.get_json()
        db = DatabaseController.imsdatabase()
        return db.validateUser(data['email'])

class add_to_cart(Resource):
    def post(self):
        data = request.get_json()
        db = DatabaseController.imsdatabase()
        return db.addToCart(data['ItemID'], data['UserID'], data['Quantity'])

class get_cart(Resource):
    def post(self):
        data = request.get_json()
        db = DatabaseController.imsdatabase()
        return db.addAllCart(data['ItemID'], data['UserID'])
class check_login(Resource):
    def post(self):
        db = DatabaseController.imsdatabase()
        data = request.get_json()
        retval = db.checkLogin(data['email'], data['password'])
        return retval;

class restock_item(Resource):
    def post(self):
        db = DatabaseController.imsdatabase()
        data = request.get_json()
        db.restock(data['id'], data['amount'])
        return

api.add_resource(get_all_items, '/getItems')
api.add_resource(get_all_tops, '/getTops')
api.add_resource(get_all_bottoms, '/getBottoms')
api.add_resource(get_all_shoes, '/getShoes')
api.add_resource(get_all_accessories, '/getAccessories')
api.add_resource(hello_world, '/HelloWorld')
api.add_resource(register_user, '/registerUser')
api.add_resource(add_purchase, '/addPurchase')
api.add_resource(get_purchases, '/getPurchases')
api.add_resource(get_item_by_id, '/getItemById')
api.add_resource(validate_user, '/validateUser')
api.add_resource(add_to_cart, '/addToCart')
api.add_resource(get_cart, '/getAllCart')
api.add_resource(check_login, '/checkLogin')
api.add_resource(restock_item, '/restock')

if __name__ == "__main__":
    app.run()