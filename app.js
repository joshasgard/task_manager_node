const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

// middleware

app.use(express.json())

// routes

app.get('/home', (req, res)=>{
    res.send('<h1>Task Manager App</h1>')
})

app.use('/api/v1/tasks', tasks)
// Routes to create
//app.get('/api/v1/tasks') - get all the tasks
//app.post('/api/v1/tasks') - create a new task
//app.get('/api/v1/tasks/:id') - get single task
//app.patch('/api/v1/tasks') - update task
//app.delete('/api/v1/tasks') - delete task


const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}...`))