const {
    createTaskRecord,
    listTaskRecords,
    deleteTaskRecord
} = require('../models/taskModel');
const { buildReminder } = require('../services/reminderService');

function createTask(req, res) {
    const { title, description, reminderDate, reminderText, status } = req.body || {};

    if (!title || !reminderDate || !status) {
        return res.status(400).json({ error: 'Title, reminderDate and status are required.' });
    }

    const reminder = buildReminder({ title, description, reminderDate, reminderText });
    const task = createTaskRecord({ title, description: description || '', reminderDate, reminder, status });
    return res.status(201).json(task);
}

function listTasks(req, res) {
    return res.status(200).json(listTaskRecords());
}

function deleteTask(req, res) {
    const deleted = deleteTaskRecord(req.params.id);

    if (!deleted) {
        return res.status(404).json({ error: 'Task not found.' });
    }

    return res.status(200).json({ deleted: true });
}

module.exports = {
    createTask,
    listTasks,
    deleteTask
};
