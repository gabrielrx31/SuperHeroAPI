const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const heroRoutes = require('./routes/heroRoutes');
const errorHandler = require('./middlewares/errorHandler');

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Superhero REST API!');
});

//Routes
app.use('/superheroes', heroRoutes);

//404 handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
});

app.use(errorHandler);

module.exports = app;