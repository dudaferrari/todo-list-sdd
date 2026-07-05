const test = require('node:test');
const assert = require('node:assert/strict');

const { createTask, listTasks, deleteTask } = require('../src/controllers/taskController');
const { resetTasks } = require('../src/models/taskModel');

function createResponse() {
    return {
        statusCode: 200,
        body: undefined,
        status(code) {
            this.statusCode = code;
            return this;
        },
        json(payload) {
            this.body = payload;
            return this;
        },
        send(payload) {
            this.body = payload;
            return this;
        }
    };
}

test.beforeEach(() => {
    resetTasks();
});

test('createTask persists a task and returns 201', () => {
    const req = {
        body: {
            title: 'Estudar',
            description: 'Revisar o backend',
            reminderDate: '2026-07-06',
            status: 'pending'
        }
    };
    const res = createResponse();

    createTask(req, res);

    assert.equal(res.statusCode, 201);
    assert.equal(res.body.title, 'Estudar');
    assert.equal(res.body.status, 'pending');
});

test('listTasks returns all stored tasks', () => {
    const res = createResponse();

    createTask({ body: { title: 'Comprar pão', description: '...', reminderDate: '2026-07-06', status: 'pending' } }, createResponse());
    listTasks({}, res);

    assert.equal(res.statusCode, 200);
    assert.equal(Array.isArray(res.body), true);
    assert.equal(res.body.length, 1);
});

test('deleteTask removes a task by id', () => {
    const created = createResponse();
    createTask({ body: { title: 'Limpar casa', description: '...', reminderDate: '2026-07-06', status: 'pending' } }, created);

    const res = createResponse();
    deleteTask({ params: { id: created.body.id } }, res);

    assert.equal(res.statusCode, 200);
    assert.equal(res.body.deleted, true);
});

test('createTask stores a reminder payload for the task', () => {
    const req = {
        body: {
            title: 'Estudar',
            description: 'Revisar o backend',
            reminderDate: '2026-07-06',
            reminderText: 'Revisar a API antes do deploy',
            status: 'pending'
        }
    };
    const res = createResponse();

    createTask(req, res);

    assert.equal(res.statusCode, 201);
    assert.equal(res.body.reminder.text, 'Revisar a API antes do deploy');
    assert.equal(res.body.reminder.date, '2026-07-06');
});
