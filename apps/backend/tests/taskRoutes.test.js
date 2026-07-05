const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const app = require('../app');
const { resetTasks } = require('../src/models/taskModel');

test.beforeEach(() => {
    resetTasks();
});

test('GET /tasks returns an empty list initially', async () => {
    const response = await request(app).get('/tasks');

    assert.equal(response.status, 200);
    assert.deepEqual(response.body, []);
});

test('POST /tasks creates a task and GET /tasks lists it', async () => {
    const created = await request(app)
        .post('/tasks')
        .send({
            title: 'Fazer teste',
            description: 'Implementar testes',
            reminderDate: '2026-07-06',
            status: 'pending'
        });

    assert.equal(created.status, 201);

    const listed = await request(app).get('/tasks');
    assert.equal(listed.status, 200);
    assert.equal(listed.body.length, 1);
    assert.equal(listed.body[0].title, 'Fazer teste');
});

test('DELETE /tasks/:id removes the task', async () => {
    const created = await request(app)
        .post('/tasks')
        .send({
            title: 'Apagar tarefa',
            description: '...',
            reminderDate: '2026-07-06',
            status: 'pending'
        });

    const removed = await request(app).delete(`/tasks/${created.body.id}`);
    assert.equal(removed.status, 200);

    const listed = await request(app).get('/tasks');
    assert.deepEqual(listed.body, []);
});

test('POST /tasks stores reminder info in the created task', async () => {
    const created = await request(app)
        .post('/tasks')
        .send({
            title: 'Lembrar de pagar conta',
            description: 'Conta de luz',
            reminderDate: '2026-07-06',
            reminderText: 'Pagar até o fim do dia',
            status: 'pending'
        });

    assert.equal(created.status, 201);
    assert.equal(created.body.reminder.text, 'Pagar até o fim do dia');
    assert.equal(created.body.reminder.date, '2026-07-06');
});
