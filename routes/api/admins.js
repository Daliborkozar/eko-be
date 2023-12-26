
const express = require('express');
const router = express.Router();
const adminUsersController = require('../../controllers/adminsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
  .get(adminUsersController.getAllAdminUsers)
  //.delete(verifyRoles(ROLES_LIST.Admin), adminUsersController.deleteAdminUser);

// router.route('/users/:id')
//   .get(verifyRoles(ROLES_LIST.Admin), adminUsersController.getAdminUser);

module.exports = router;