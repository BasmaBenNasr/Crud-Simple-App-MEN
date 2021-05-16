const express= require('express');
const route = express.Router()

const services=require('../services/render');
/*Root Route*/
/*GET method*/
route.get('/',services.homeRoutes);

/*add users*/
/*GET method  add-user*/

route.get('/add-user',services.add_user);

/*update users*/
/*GET method  update-user*/

route.get('/update-user',services.update_user);
module.exports = route