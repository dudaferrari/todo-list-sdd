import { useState } from 'react';

export default function TaskForm({ onSubmit }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        reminderDate: '',
        reminderText: '',
        status: 'pending'
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(form);
        setForm({ title: '', description: '', reminderDate: '', reminderText: '', status: 'pending' });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={form.title} onChange={handleChange} placeholder="Título" required />
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Descrição" />
            <input name="reminderDate" type="date" value={form.reminderDate} onChange={handleChange} required />
            <input name="reminderText" value={form.reminderText} onChange={handleChange} placeholder="Texto do lembrete" />
            <select name="status" value={form.status} onChange={handleChange}>
                <option value="pending">Pendente</option>
                <option value="completed">Concluída</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>
    );
}
