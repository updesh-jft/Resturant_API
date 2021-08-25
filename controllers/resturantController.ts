import resturantService from '../services/resturant';
const Resturant = new resturantService();

const restro = {
 listResturant: (req: any, res: any) => {
        try {
            Resturant.getAllResturant().then((data: any) => {
                return res.status(200).send(data);
            });
        } catch (error) {
            return res.send(error);
        }
    },


 registerResturant: (req: any, res: any) => {
        try {
            const postData = req.body;

            if (!postData.name || !postData.address) {
                return res.send('fill all the details');
            }

            if (!req.files) {
                res.send({
                    status: false,
                    message: 'Add file to upload'
                });
            } else {
                const avatar = req.files.picture;
                avatar.mv('./uploads/resturant/' + avatar.name);
                const path = './uploads/resturant/' + avatar.name;
                postData.picture = path;
                if (path) {
                    Resturant.createResturant(postData).then((data: any) => {
                        return res.status(200).send(data);
                    });
                } else {
                    res.send({
                        status: false,
                        message: 'Please try again'
                    });
                }

            }

        } catch (error) {
            return res.send(error);
        }

    },

updateResturant : (req : any, res : any) => {
    try {
        const resturantId =  req.param('_id');
        const postData = req.body;
        if (!resturantId) {
            return res.send('Please send resturant id in the params')
        }
        if(req.files){
            const avatar = req.files.picture;
            avatar.mv('./uploads/resturant/' + avatar.name);
            const path = './uploads/resturant/' + avatar.name
            postData.picture = path;
            if (path) {
                Resturant.createResturant(postData).then((data: any) => {
                    return res.status(200).send(data)
                })
            } else {
                res.send({
                    status: false,
                    message: 'Please try again'
                });
            }

        }
        Resturant.resturantUpdate(postData, resturantId).then((data: any) => {
            return res.status(200).send(data)
        })

    } catch (error) {
        return res.send(error);
    }

},

resturantProductsList : (req : any, res : any) => {
    try {
        const resturantId = req.param('_id');
        if (!resturantId) {
            return res.send('Please send resturant id in the params')
        }
        Resturant.resturantProductsList(resturantId).then((data: any) => {
            return res.status(200).send(data)
        })
    } catch (error) {
        return res.send(error);
    }

},

createResturantProduct : (req : any, res : any) =>{
    try {
        const postData = req.body;
        const resturantId = req.body.resturantId;
        if (!resturantId) {
            return res.send('Please send resturant id in the body')
        }
        if (!postData.name || !postData.price || !postData.category) {
            return res.send('Fill all the details')
        }
        if (!req.files) {
            res.send({
                status: false,
                message: 'Add file to upload'
            });
        } else {
            const avatar = req.files.picture;
            avatar.mv('./uploads/product/' + avatar.name);
            const path = './uploads/product/' + avatar.name
            postData.picture = path;
            if (path) {
                Resturant.createResturantProduct(postData).then((data: any) => {
                    return res.status(200).send(data)
                })
            } else {
                res.send({
                    status: false,
                    message: 'Please try again'
                });
            }

        }


    } catch (error) {
        return res.send(error);
    }

},


changeResturantProduct : (req : any, res : any) => {
    try {
        const productId = req.param('_id');
        const postData = req.body;
        if (!productId) {
            return res.send('Please send product id in the params')
        }
        if(req.files){
            const avatar = req.files.picture;
            avatar.mv('./uploads/product/' + avatar.name);
            const path = './uploads/product/' + avatar.name
            postData.picture = path;
            if (path) {
                Resturant.changeResturantProduct(postData, productId).then((data: any) => {
                    return res.status(200).send(data)
                })
            } else {
                res.send({
                    status: false,
                    message: 'Please try again'
                });
            }

        }
        Resturant.changeResturantProduct(postData, productId).then((data: any) => {
            return res.status(200).send(data)
        })
    } catch (error) {
        return res.send(error);
    }

},

deleteResturantProduct : (req : any, res : any) => {
    try {
        const productId = req.param('_id');
        if (!productId) {
            return res.send('Please send product id in the params')
        }
        Resturant.deleteReturantProduct(productId).then((data: any) => {
            return res.status(200).send(data)
        })
    } catch (error) {
        return res.send(error);
    }

}
}

export default restro;