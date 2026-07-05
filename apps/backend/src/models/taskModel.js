const tasks = [];

function resetTasks() {
    tasks.length = 0;
}

function createTaskRecord(task) {
    const normalizedTask = {
        id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
        title: task.title,
        description: task.description,
        reminderDate: task.reminderDate,
        reminder: task.reminder,
        status: task.status
    };

    tasks.push(normalizedTask);
    return normalizedTask;
}

function listTaskRecords() {
    return tasks.map((task) => ({ ...task }));
}

function deleteTaskRecord(id) {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        return false;
    }

    tasks.splice(taskIndex, 1);
    return true;
}

module.exports = {
    createTaskRecord,
    listTaskRecords,
    deleteTaskRecord,
    resetTasks
};