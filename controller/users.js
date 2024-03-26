const userModel = require('../models/users');
const userService = require('../service/users');
const jwt = require('jsonwebtoken');




async function createUser(req, res, next) {
  try {
    await userService.createUser(req.body);
    console.log(5);
    res.json({ status: "ok" }); 
  } catch (error) {
    if (error.code == 11000) {
      console.log("Username already in use");
      return res.json({ status: 'error', error: 'username already in use' });
    }
    next(error); 
  }
}

function generateToken(username) {
  return jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
}


async function findUser(req, res) {
    const { id } = req.params;
  
    const foundUser = await userService.findUser(id);
    if(foundUser)
        {res.send(foundUser);}
    else
    {res.status(404).send("User not found")}    
  }

  
  async function userLogin(req, res){
    const { username, password } = req.query;
  
    const user = await userModel.findOne({ username: username });
  
    if (user) {
      if (user.password === password) {
        const token = generateToken(username);
        res.json({ token });
      } else {
        res.status(401).send("Yanlış şifre");
      }
    } else {
      res.status(404).send("Kullanıcı bulunamadı");
    }
  }



module.exports = {
    createUser,
    findUser,
    userLogin,
}
