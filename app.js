const express = require('express');
const morgan = require('morgan');
const path = require('path');

const heroRoutes = require('../routes/heroRoutes');
const heroCrudRoutes = rquire('../routes/heroCrudRoutes');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});