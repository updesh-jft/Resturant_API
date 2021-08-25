import mongoose from 'mongoose';

const schema = mongoose.Schema;

const product = new schema({
        picture : {
            type: String,
            required:true
        },
        name : {
            type : String,
            required : true
        },
        price : {
            type : String,
            required : true
        },
        category : {
            type : Array,
            required : true
        },
        resturantId : {
            type : schema.Types.ObjectId,
            ref : 'resturant'
        }
})


export default  mongoose.model('product',product);