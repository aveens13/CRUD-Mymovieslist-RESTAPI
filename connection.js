import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGODB,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log(`Mongoose connceted: ${con.connection.host}`);
    }
    
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
export default connectDB