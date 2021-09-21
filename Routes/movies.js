import express from 'express';
import {homeroute,add_movie,update_movie} from './render.js';
const router = express.Router();
import moviedb from "../model/model.js";

router.get('/',homeroute)

router.get('/add-movie',add_movie)

router.get('/update-movie',update_movie)

router.post('/api/movie',(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Cannot be found"});
        return;
    }
    const movie = new moviedb({
        name:req.body.name,
        rating:req.body.rating,
        genre: req.body.genre,
        recommend: req.body.recommend,
    })
    movie
        .save(movie)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message 
            })
        })
}
)
router.get('/api/movie',(req,res)=>{
    //Getting specific movie
    if(req.query.id){
        const id = req.query.id
        moviedb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`No movie with id ${id}`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"error with"+id})
        })
    }
    //getting all movies
    else{
        moviedb.find()
        .then(movie=>{
            res.send(movie)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error"})
        })
    }
})
router.put('/api/movie/:id',(req,res)=>{
    if(!req.body){
        return req
            .status(400)
            .send({message:"Cannot be empty"})
    }
    const id =req.params.id;
    moviedb.findByIdAndUpdate(id,req.body,{useFindAndModiify:false})
    .then(data=>{
        if(!data){
            res.status(400).send(`Cannot update the movie with id ${id}`)
        }
        else{
            res.send(data);
        }
    })
    .catch(err=>{
        res.send({message:`Error ${err}`})
    })
})
router.delete('/api/movie/:id',(req,res)=>{
 const id =req.params.id;
 moviedb.findByIdAndDelete(id)
 .then(data=>{
     if(!data){
         res.status(400).send("Cannot Delete");
     }
     else{
         res.send("Movie was Deleted");
     }
 })
 .catch(err=>{
     res.status(400).send(`Could not delete movie with id ${id}`);
 })
})


export default router;