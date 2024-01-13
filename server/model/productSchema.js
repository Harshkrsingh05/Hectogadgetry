import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});
const Product=mongoose.model('product',productSchema);
export default Product;