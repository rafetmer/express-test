const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');



const productRoutes = require('./routes/product.js');
const signupRoutes = require('./routes/users-signup.js')
const loginRoutes = require('./routes/users-login.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin123@cluster0.gfumxta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const database = mongoose.connection;
database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});


// function adminMidd(req, res, next) {
//   req.body.user !== 'ADMIN' ? res.send('you need to be an admin') : next();
// }

function authMiddleware(req, res, next) {
  const token = req.body.token;

  if (!token) {
      return res.status(401).json({ message: 'Yetkilendirme başarısız: Token bulunamadı' });
  }

  jwt.verify(token, 'secret_key', (err, decoded) => {
      if (err) {
          return res.status(401).json({ message: 'Yetkilendirme başarısız: Geçersiz token' });
      }
      req.username = decoded.username;
      next(); 
  });
}


function logOperation(req, res, next) {
  console.log(123);
  console.log(req.method, req.body);
  next();

  res.send('create');

}

app.use(bodyParser.json());
//! GET, PATCH, PUT, POST, DELETE

app.use('/products' ,authMiddleware ,productRoutes,logOperation);
app.use('/signup', signupRoutes, logOperation);
app.use('/login', loginRoutes, logOperation);




app.listen(port, () => console.log(`Example app listening on port ${port}!`));
