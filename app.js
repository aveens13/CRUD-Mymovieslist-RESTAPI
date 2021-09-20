//Importing modules
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import userRoutes from './Routes/users.js';
import productRoutes from './Routes/products.js';
import morgan from 'morgan'
import path from 'path'
const __dirname = path.resolve();

// Making express call and port 
const app =express();
dotenv.config({path:'.env'});
const PORT= process.env.PORT || 5000;

//Requests
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json()); // we will be using json data

//Setting View Engine
app.set('view engine','ejs');


// Loading Static Folders
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/images',express.static(path.resolve(__dirname,"assets/images")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//Routing
app.use('/users',userRoutes);
app.use('/products',productRoutes);

//Get Requests
app.get('/',(req,res)=>{res.render('index');})

app.get('/add-movie',(req,res)=>{res.render('add-movie');})

//Listening to server
app.listen(PORT,()=>{
    console.log(`Listening on server http://localhost:${PORT}`);
})