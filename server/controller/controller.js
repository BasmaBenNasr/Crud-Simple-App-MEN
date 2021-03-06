var Userdb= require('../model/model')

//create and save new user
exports.create=(req,res)=>{
 //validate request
 if(!req.body){
     res.status(400).send({message: "Content cannot be empty!"});
     return;
 }

 //new user
 const user = new Userdb({
     name:req.body.name,
     email:req.body.email,
     gender:req.body.gender,
     status:req.body.status
 })

 // save the user in the database
 user
    .save(user)
    .then(data=>{
        /*res.send(data)*/
        res.redirect('/add-user')
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Sorry something went wrong while creating a create operation"
        })
    })

}


//retrieve and return all users/ retrieve nd return a single user
exports.find=(req,res)=>{
    // retrieve nd return a single user
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.send(404).send({message:"Not Found user with id"+id})
            }else{
                res.send(data)
            }
        
        })
        .catch(err=>{res.status(500).send({message:"Error to find user with id"+id})
    })
    }else{
        Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "We cannot find this user information"})
    })
    
    }

    
}


//update a new user by useer id
exports.update=(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"We cannot update empty data"})
    }

    const id = req.params.id

    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot update user with ${id}, Maybe use not found!`})
        }else{
        res.send(data)
    }
    })
    .catch(err=>{
        res.status(500).send({message:"Error occured while updating user information"})
    })
    
}


//delete a user with specified user id in the request
exports.delete=(req,res)=>{
    const id = req.params.id;
    
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Connot Delete with id ${id}`})
        }else{
            res.send({
                message: "User was deleted successfully!"
            })
        }
    })

    .catch(err=>{
        res.status(500).send({message:"Could not delete user with this id=" + id})
    })
}