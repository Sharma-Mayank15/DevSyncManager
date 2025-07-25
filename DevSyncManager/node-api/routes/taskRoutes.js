const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/sync', taskController.syncTask);

module.exports = router;
