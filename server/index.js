const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const pool = require('./db'); 

// Middleware
app.use(cors());

// Require json data from the Client body
app.use(express.json());

// Routes
// Create a todo
app.post('/create_todo', async (req, res) => {
    try {
        console.log(req.body);
        const { description } = req.body;

        const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', // RETURNING * returns the data that was just inserted
        [description]); // description is $1

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Get a todo
app.get('/todos/:id', async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE id = $1', [id]) // $1 is the id
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// Update a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE id = $2', 
        [description, id]); // $1 is description, $2 is id

        res.json('Todo was updated');
    } catch (err) {
        console.error(err.message);
    }
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query('DELETE FROM todo WHERE id = $1', 
        [id]);
        res.json('Todo was deleted');
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});