import mongoose from "mongoose";

export const Connection= async(username, password)=>{
    const URL=`mongodb+srv://${username}:${password}@hectogadgetry.fgt9w5q.mongodb.net/HECTOGADGETRY?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch(error){
        console.log('Error while connecting with database',error.message);
    }
}

export default Connection;