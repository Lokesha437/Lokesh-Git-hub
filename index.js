import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 7000;
const MONGODB_URL = process.env.mongo88DB_URL || "mongodb://localhost:27017/ISE";
mongoose.connect(MONGODB_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
const userSchema=new mongoose.Schema({
    name:String,
    age:Number
})

const UserModel = mongoose.model("mongoconnect",userSchema,"mongoconnect")

app.get("/getUsers",async (req,res)=>{
    const userData=await UserModel.find()

    res.json(userData)
})