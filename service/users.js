const userSchema = require('../models/users');

async function createUser(userBody) {
    const createUser = new userSchema(userBody);
    await createUser.save();
    return createUser;
  }
  
  function findUser(id) {
    return userSchema.findById(id);
  }
  

  module.exports = {
    createUser,
    findUser,
  };
  