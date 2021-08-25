Challenged and Problem Encountered: 
 - I got some issues while doing crud operations.
 - At some point I was stuck in image upload for resturants.

Ways to improve the application: 
 - Create proper pre defined categories for products would be more helpful. 
 - Proper structuring of the models should be implemented while creating user models in future.
 
Instructions to run: 
 - Got into the app directory and run npm install on terminal , that will install the requried modules.
 - Then run npm start on terminal , this will trigger the application and it will start listening on 3000 port and will automatically create a database naming resturant , which will come from dbconnection.ts .
 - After the above steps are done , open postman and you can start hitting the below methioned API's and also select the required the required methods along with it , either PUT , POST ,GET or DELETE
 
 	-http://localhost:3000/listResturant  {GET}
 		This API will list all the resturants from the database.
 		
 	-http://localhost:3000/registerResturant  {POST}
 		This API will register a new resturant , you have to pass these attributes in body - form-data {picture,name,address,openingHours} , in picture change attribute type from text to file 
 		and then select a picture.
 		
 	-http://localhost:3000/updateResturant  {PUT}
 		This API will update the resturant data , you have to pass the attributes that you need to update in body - form-data {picture,name,address,openingHours}, along with the resturant id in params. 
 		
 	-http://localhost:3000/resturantProductsList  {GET}	
 		This API will list all the products for a particular resturant from the database. You have pass _id in params and then you can request it to see the products.
 	
 	-http://localhost:3000/createResturantProduct  {POST}	
 		 This API will register a new product on the behalf of a resturant , you have to pass these attributes in body - form-data {resturantId,picture,name,price,category} , in picture change attribute type from text to 
 		 file and then select a picture.
 	
 	-http://localhost:3000/createResturantProduct  {PUT}	
 	 	This API will update the resturant data , you have to pass the attributes that you need to update in body form-data {picture,name,price,category}, along with the product id in params. 
 	
 	-http://localhost:3000/deleteResturantProduct  {DELETE}	
 		This API will delete the product , you have to pass id attribute in the params(_id) that will be the product id that you want to delete. 
