import mysql.connector

class imsdatabase():

    def __init__(self):
       self.conn = mysql.connector.connect(
            host="107.180.50.225",
            user="admin3",
            passwd="joshua747",
            database="imsdb3"
        )

    def __del__(self):
        self.conn.close()

    def getAllItems(self):
        sql = """SELECT * FROM ITEM"""
        cursor = self.conn.cursor()
        cursor.execute(sql)
        result = cursor.fetchall()
        # result contains the data in tuples
        # [['123','Pants','50.99','M','230','801234','0986263'],['145','Shoes','30.49','M','90','087234','65892']]
        # data does not have headers
        #convert it to JSON
        items =[]
        for row in result:
            items.append({ 'ItemID' : row[0], 'Name' : row[1], 'Price' : row[2], 'Gender' : row[3], 'Stock' : row[4], 'StoreID' : row[5], 'SupplierID' : row[6]})
        cursor.close()
        return items

    def getAllTops(self):
        sql = """SELECT * FROM TOPS"""
        cursor = self.conn.cursor()
        cursor.execute(sql)
        result = cursor.fetchall()

        items =[]
        for row in result:
            items.append({ 'ItemID' : row[0], 'Chest_Size' : row[1], 'Shirt_Length' : row[2], 'Type' : row[3]})
        cursor.close()
        return items

    def getAllBottoms(self):
        sql = """SELECT * FROM BOTTOMS"""
        cursor = self.conn.cursor()
        cursor.execute(sql)
        result = cursor.fetchall()

        items =[]
        for row in result:
            items.append({ 'ItemID' : row[0], 'Waist_Size' : row[1], 'Pant_Length' : row[2], 'Type' : row[3]})
        cursor.close()
        return items

    def getAllShoes(self):
        sql = """SELECT * FROM SHOES"""
        cursor = self.conn.cursor()
        cursor.execute(sql)
        result = cursor.fetchall()

        items =[]
        for row in result:
            items.append({ 'ItemID' : row[0], 'ShoeSize' : row[1], 'Type' : row[2]})
        cursor.close()
        return items

    def getAllAccessories(self):
        sql = """SELECT * FROM ACCESSORIES"""
        cursor = self.conn.cursor()
        cursor.execute(sql)
        result = cursor.fetchall()

        items =[]
        for row in result:
            items.append({ 'ItemID' : row[0], 'Type' : row[1]})
        cursor.close()
        return items

    def checkLogin(email, password):
        sql = """   SELECT  * 
                    FROM    CUSTOMER 
                    WHERE   Email = {0} AND Password = {1}"""
        cursor = self.conn.cursor()
        cursor.execute(sql.format(email, password))
        cursor.conn.commit()
        retval = cursor.lastrowid
        cursor.close()
        return retval


    # def getAllPurchases(self):
    #     #we need user table
