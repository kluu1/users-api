const Users = require('../models/users');

const resolvers = {
  Query: {
    getUsers: async (_, args) => {
      // destrcture search, page, limit, and set default values
      const { search = null, page = 1, limit = 20 } = args;

      // run if search is provided
      if (search) {
        // build the search query
        const searchQuery = {
          $or: [
            { firstName: { $regex: search, $options: 'i' } },
            { lastName: { $regex: search, $options: 'i' } },
            { userName: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: 'i' } },
            { jobTitle: { $regex: search, $options: 'i' } }
          ]
        };
        // execute mongoose query with search query
        return Users.find(searchQuery)
          .limit(limit)
          .skip((page - 1) * limit)
          .lean();
      }

      // if no search is provided query for all users
      return Users.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .lean();
    }
  }
};

module.exports = resolvers;
