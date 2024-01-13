import User from "../model/userSchema.js";

export const userSignup =async (req,res)=>{
    try{
        const exist =await User.findOne({ username:req.body.username});
        if(exist){
            return res.status(401).json({message:'Username already exists'});
        }

        const user=req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({message: user});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}