import express from 'express'
import {v4 as uuidv4} from 'uuid'
const router = express.Router();
let users = []

router.get('/',(req,res)=>{

    console.log(users);
    res.send(users);

})
router.post('/',(req,res)=>{

    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`User with name ${user.name} has been created.`);

})

router.get('/:id',(req,res)=>{
    const { id } = req.params;
    const findUser = users.find((user)=>user.id == id);
    res.send(findUser);
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const findUser = users.find((user)=>user.id == id);
    users = users.filter((user)=> user.id !=id);
    res.send(`User with the name ${findUser.name} and id ${id} deleted`);
});

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const {name,age} = req.body;
    const userUpdated = users.find((user)=>user.id == id);
    if(name){
        userUpdated.name = name;
        res.send(`Name Updated for id number ${id}`);
    }
    if(age){
        userUpdated.age = age;
        res.send(`Age Updated for id number ${id}`);
    }

})
export default router;