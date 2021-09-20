import mongoose from 'mongoose'
var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    genre:String,
    recommend:String,
})

const moviedb = mongoose.model('moviesDb',schema)
export default moviedb