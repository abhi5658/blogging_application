const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' });
});

const blogRoutes = require('./routes/blogRoutes');
app.use(blogRoutes);

// default 404 handler
app.use(function (req, res, next) {
    res.status(404);
    res.json({ error: 'Route not found' });

    return;
});

module.exports = app;
