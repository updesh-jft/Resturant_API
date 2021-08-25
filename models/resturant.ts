import mongoose from 'mongoose';

const schema = mongoose.Schema;

const resturant = new schema({
        picture : {
            type: String,
            required:true
        },
        name : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        },
        openingHours : {
            type : String,
            required : true
        } ,


})


export default  mongoose.model('resturant',resturant);