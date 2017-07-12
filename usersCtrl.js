 var userData = require('./userData.json');


 module.exports = {


     allUsers: function (req, res) {


             let data = userData.filter(function (e) {
                 let q = req.query;
                 console.log(q);
                 for (let key in q) {
                     if (key == 'favorites') {
                         for (i = 0; i < e['favorites'].length; i++) {
                             if (q[key] == e.favorites[i]) {
                                 return true;
                             }
                         }
                     } else if (key == 'age' && e[key] < q[key]) {
                         return true;
                     } else if (key == 'lastname' && e['last_name'] == q[key]) {
                         return true;
                     } else if (key == 'email' && e.email == q[key]) {
                         return true;
                     } else return false;
                 }
             });
             if (data.length === 0) {
                 res.status(200).send(userData);
             } else if (data.length < 2) {
                 res.status(200).send(data[0]);
             } else res.status(200).send(data);
         }


         ,
     userId: function (req, res) {


             let winners = userData.filter(function (e) { //checking each element individually 
                 let q = req.params
                 for (let key in q) { //checks all key in the object 
                     if (e.id == q.userId) {
                         return true;
                     }
                 }
                 return false;
             });
             if (winners.length >= 1) {
                 res.send(winners[0]);
             } else return res.status(404).send('null');
         }


         ,
     admins: function (req, res) {


             let admin = userData.filter(function (e) {
                 if (e.type === 'admin') {
                     return true;
                 }
             });
             res.status(200).send(admin);
         }


         ,
     nonAdmins: function (req, res) {


         let nonAdmin = userData.filter(function (e) {
             if (e.type != 'admin') {
                 return true;
             } else return false
         });
         res.status(200).send(nonAdmin);
     },
     userType: function (req, res) {
             let userty = userData.filter(function (e) {
                 let z = req.params
                 if (e.type == z.userType) {
                     return true;
                 } else return false
             });
             res.status(200).send(userty);


         }


         ,
     putUserId: function (req, res) {
             let userUpdate = userData.filter(function (e) {
                 let q = req.body
                 if (e.id == q.id) {
                     for (let key in q) {
                         e[key] = q[key];
                     }
                     console.log
                     return e;
                 }
             })
             res.status(200).send(userData);
         }


         ,
     postUsers: function (req, res) {
             let q = req.body;
             q['id'] = userData[userData.length - 1].id + 1;
             userData.push(q);
             res.status(200).send(userData);
         }


         ,
     deleteUserId: function (req, res) {
         console.log(req.params.userId);
         let z = req.params.userId - 1;
         let deleted = userData.splice(z, 1)
         res.status(200).send(userData);
     }
 }