//import the axios library to allow us to render all the data on the browser

const axios = require('axios')


exports.homeRoutes=(req,res)=>{
    //i want to make a get request to the /api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index',{users:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.add_user=(req,res)=>{
    res.render("add_user");
}

exports.update_user=(req,res)=>{
    res.render("update_user");
}