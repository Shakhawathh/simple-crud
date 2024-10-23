const express = require('express');
const { connectionToDB } = require('./connection');
const userRouter = require('./routes/user');

const app = express();
const PORT = 5001;
//connection
connectionToDB('mongodb://127.0.0.1:27017/crud');

app.use(express.urlencoded({ extended: false }));
//router
app.use('/api', userRouter);

app.listen(PORT, () => console.log('server running', PORT));
