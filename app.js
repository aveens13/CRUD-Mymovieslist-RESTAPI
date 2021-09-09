//Importing express framework and bodyparser to make requests
import express from 'express';
import bodyParser from 'body-parser';

// Making express call and port 
const app =express();
const PORT= 5000;

// Body of Rest Api
app.use(bodyParser.json()); // we will be using json data

app.listen(PORT,()=>{
    console.log(`Listening on server ${PORT}`);
})