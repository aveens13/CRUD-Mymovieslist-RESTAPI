import axios from "axios";

export const homeroute=(req,res)=>{
    axios.get('http://localhost:3000/api/movie')
        .then(function(response){
            console.log(response.data);
            res.render('index',{movies:response.data});  
        })
}

export const add_movie=(req,res)=>{res.render('add-movie');}

export const update_movie=(req,res)=>{
    axios.get('http://localhost:3000/api/movie',{params:{id:req.query.id}})
    .then(function(response){
        console.log(response.data.name);
        res.render('update-movie',{movie:response.data});
    })
    .catch(err=>{
        res.send({message:`Error while doing the operation`});
    })
}
