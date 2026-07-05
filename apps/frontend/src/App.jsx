import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { createTask, deleteTask, fetchTasks } from './services/taskService';

export default function App() {
    const [tasks, setTasks] = useState([]);

    async function loadTasks() {
        const data = await fetchTasks();
        setTasks(data);
    }

    useEffect(() => {
        loadTasks();
    }, []);

    async function handleCreate(task) {
        await createTask(task);
        await loadTasks();
    }

    async function handleDelete(id) {
        await deleteTask(id);
        await loadTasks();
    }

    return (
        <main>
            <h1>Todo List</h1>
            <TaskForm onSubmit={handleCreate} />
            <TaskList tasks={tasks} onDelete={handleDelete} />
        </main>
    );
}
