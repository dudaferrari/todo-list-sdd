function buildReminder({ title, description, reminderDate, reminderText }) {
    return {
        date: reminderDate,
        text: reminderText || `Lembrete para ${title}${description ? `: ${description}` : ''}`
    };
}

module.exports = {
    buildReminder
};
