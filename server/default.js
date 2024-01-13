import {products} from "./constant/data.js";
import Product from "./model/productSchema.js";

const DefaultData=async ()=>{
    try{
        await Product.insertMany(products);
        console.log("Data imported successfully");
    }catch(error){
        console.log('Error while inserting default data',error.message);
    }
}
export default DefaultData;