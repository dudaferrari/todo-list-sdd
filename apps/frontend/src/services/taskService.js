const API_BASE_URL = import.meta.env.VITE_API_URL || '/';

function getApiUrl(path) {
    return `${API_BASE_URL.replace(/\/$/, '')}${path}`;
}

export async function fetchTasks() {
    const response = await fetch(getApiUrl('/tasks'));
    return response.json();
}

export async function createTask(task) {
    const response = await fetch(getApiUrl('/tasks'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    });

    return response.json();
}

export async function deleteTask(id) {
    const response = await fetch(getApiUrl(`/tasks/${id}`), { method: 'DELETE' });
    return response.json();
}
