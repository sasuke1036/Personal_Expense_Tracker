const mongoose = require('mongoose');
const db = async ()=>{
    try{
        mongoose.set('strictQuery',false);//this means that it will only include the properties in the query that exist in the schema..
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db connected');
    }catch(err){
        console.log('DB connection error');
    }
}
module.exports = {db};