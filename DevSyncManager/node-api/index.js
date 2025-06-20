const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

app.listen(3000, () => console.log('Sync API running on http://localhost:3000'));
