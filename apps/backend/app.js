const express = require('express');
const cors = require('cors');
const taskRoutes = require('./src/routers/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
app.use('/tasks', taskRoutes);

module.exports = app;

if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}
