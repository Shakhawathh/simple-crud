const express = require('express');
const router = express.Router();
const {
  handleAllUser,
  handleSingleUser,
  handleAddUser,
  handleUpdateUser,
  handleDeleteUser,
} = require('../controllers/user');

router.get('/user', handleAllUser);

router.get('/user/:id', handleSingleUser);

router.post('/user', handleAddUser);

router.patch('/user/:id', handleUpdateUser);

router.delete('/user/:id', handleDeleteUser);

module.exports = router;
