const express = require('express');
const workRoutes = require('./routes/workRoutes.js');


const app = express();
app.use(express.json());


//Routes
app.use('/api/darbai', workRoutes);

module.exports = app;