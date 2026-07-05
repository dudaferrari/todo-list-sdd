const express = require('express');
const { createTask, listTasks, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/', listTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);

module.exports = router;
