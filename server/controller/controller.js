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
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Sorry something went wrong while creating a create operation"
        })
    })

}


//retrieve and return all users/ retrieve nd reture a single user
exports.find=(req,res)=>{
    
}


//update a new user by useer id
exports.update=(req,res)=>{
    
}


//delete a user with specified user id in the request
exports.delete=(req,res)=>{
    
}