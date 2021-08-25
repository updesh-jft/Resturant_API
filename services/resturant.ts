import resturant from '../models/resturant';
import product from '../models/product';


class Resturant {
    createResturant = (body: any) => {
        return new Promise((resolve, reject) => {
            new resturant(body).save((error: any, result: unknown) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })

    }

    getAllResturant = () => {
        return new Promise((resolve, reject) => {
            resturant.find((error: any, result: unknown) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    resturantUpdate = (body: any, resturantId: any) => {
        const query = {
            _id: resturantId
        }
        return new Promise(async (resolve, reject) => {
            const data =await resturant.updateOne(query, body);
            if(data){
                resolve(data);
            }
            else{
                reject({status:false,message:'Error occurred'});
            }
        })
    }

    createResturantProduct = (body: any) => {
        return new Promise((resolve, reject) => {
            new product(body).save((error: any, result: unknown) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })

    }

    resturantProductsList = (id: any) => {
        const query = {
            resturantId: id
        }
        return new Promise((resolve, reject) => {
            product.find(query ,(error: any, result: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }


    changeResturantProduct = (body: any, productId: any) => {
        const query = {
            _id: productId
        }
        return new Promise(async (resolve, reject) => {
            const data = await product.updateOne(query, body)
            if(data){
                resolve(data);
            }
            else{
                reject({status:false,message:'Error occurred'});
            }
        })
    }

    deleteReturantProduct = (productId: any) => {
        const query = {
            _id: productId
        }
        return new Promise((resolve, reject) => {
            product.deleteOne(query,  (error: any, result: void) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        })
    }

}

export default  Resturant;