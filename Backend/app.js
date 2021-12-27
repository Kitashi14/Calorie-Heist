// Requiring npm module
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// const fs = require('fs');
const path = require('path');

const app = express();


// const placesRoutes = require('./routes/food-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');


app.use(bodyParser.json());

// app.use('/uploads/images', express.static(path.join('uploads', 'images')));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

// app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

// app.use((error, req, res, next) => {
//     if (req.file) {
//       fs.unlink(req.file.path, err => {
//         console.log(err);
//       });
//     }
//     if (res.headerSent) {
//       return next(error);
//     }
//     res.status(error.code || 500);
//     res.json({ message: error.message || 'An unknown error occurred!' });
//   });


//setting database using mongoose module
const dbname = "hungerStation"
mongoose.connect("mongodb://localhost:27017/" + dbname,function(err){
    if(err){
        console.log(err);
    }
});

// Starting the server at port 4000
app.listen(4000, function(){
    console.log(`[+] Server Started at Port: 4000`);
});


//setting up api
//----------------------------------------------------------------------------
//setting up signUp request

// server.post('/api/signup',function(req,res){
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const pw_confirmation = req.body.password_check;
//     if( password == pw_confirmation){
//         utils.addUser(name, email, password, db, function(status, value){
//             if (status === "success"){
//                 console.log(name + " added in user collection as a customer");
//                 res.send("successfully signed up <br> <h3><a href='/login'>click here</a> to login.</h3>");
//             }
//             else if(status === "exist"){
//                 res.send(value);
//             }
//             else{
//                 res.send("something went wrong");
//             }
//         });
//     }

//     else{
//         res.send("confirmed password didn't matched");
//     }
    
    
// });

// //setting up login request
// server.post('/api/login',function(req,res){
//     const email = req.body.email;
//     const password = req.body.password;
//     utils.loginUser(email, password, db, function(status, value){
//         if(status === "success"){ 
//             const user = value;
//             const token_data = {
//                 name: user.username,
//                 email: user.email,
//                 password: password
//             }
//             const accessToken = generateAccessToken(token_data);
//             const refreshToken = jwt.sign(token_data, process.env.REFRESH_TOKEN_SECRET, )
//             // refreshTokens.push(refreshToken);
//             res.cookie( 'accessToken', accessToken);
//             res.cookie('refreshToken', refreshToken);
//             res.send("hello "+ user.username +".");
            
//         }
//         else{
//             if(value === "err"){
//                 res.send("something went wrong");
//             }
//             else {
//                 res.send(value);
//             }
            
//         }
//     });
// });

// //for getting a token
// function generateAccessToken(user){
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2hr'});
// }


