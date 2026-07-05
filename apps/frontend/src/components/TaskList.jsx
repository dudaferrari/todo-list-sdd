export default function TaskList({ tasks, onDelete }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <strong>{task.title}</strong>
                    <p>{task.description}</p>
                    <p>Data: {task.reminderDate}</p>
                    <p>Lembrete: {task.reminder?.text || task.reminderText || 'Sem lembrete'}</p>
                    <p>Status: {task.status}</p>
                    <button onClick={() => onDelete(task.id)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
}
