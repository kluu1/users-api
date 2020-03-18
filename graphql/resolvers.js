const Users = require('../models/users');

const resolvers = {
  Query: {
    getUsers: async (_, args) => {
      console.log(Users);
      return Users.find();
    }
  }
};

module.exports = resolvers;
