const express = require('express');
const connectToDB = require('./config/db');
const { swaggerUi, specs } = require('./helpers/swagger');
const { errorHandler } = require('./middlewares/error.middleware');
const tasksRouter = require('./routers/task.router')
require('dotenv').config();

const port = process.env.PORT;

connectToDB()

const app = express();

app.use(express.json())

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use('/tasks', tasksRouter);

app.use(errorHandler)

app.listen(port)


