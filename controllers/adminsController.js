// controllers/usersController.js

const User = require('../model/User');

const getAllAdminUsers = async (req, res) => {
    //console.log(req)
    //console.log(req)
  try {
    console.log(req.roles)
     //Check if the user making the request has the "Admin" role
      if (!req.roles.includes('SuperAdmin')) {
        return res.status(403).json({ message: 'Access forbidden. You need to be an admin to perform this action.' });
      }

    // Retrieve all users with the role "Admin"
    const adminUsers = await User.find({ 'roles.Admin': { $exists: true } });

    res.json(adminUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  // Implement the logic for deleting a user (you can use a similar approach for other controllers)
};

const getUser = async (req, res) => {
  // Implement the logic for getting a user (you can use a similar approach for other controllers)
};

module.exports = {
  getAllAdminUsers,
  deleteUser,
  getUser,
};