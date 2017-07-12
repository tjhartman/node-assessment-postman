const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const session = require('express-session'); 



//variables 
 
 
var userCtrl = require('./usersCtrl'); 
 
 
//Middlewares 
 
 
app.use(bodyParser.json()); 
 
 
//Endpoints 
 
 
app.get('/api/users',userCtrl.allUsers); 
app.get('/api/users/:userId',userCtrl.userId); 
app.get('/api/admins',userCtrl.admins); 
app.get('/api/nonadmins',userCtrl.nonAdmins); 
app.get('/api/user_type/:userType',userCtrl.userType); 
app.put('/api/users/:userId',userCtrl.putUserId); 
 
 
app.post('/api/users/',userCtrl.postUsers); 
 
 
app.delete('/api/users/:userId',userCtrl.deleteUserId); 
 
 
 
 
 
app.listen(3000,function(){ 
console.log('Listening to port 3000'); 
}); 