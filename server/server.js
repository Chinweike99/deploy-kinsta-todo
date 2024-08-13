const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json())
const PORT = process.env.PORT ?? 8000;

// GET ALL TODOs
app.get('/todos/:userEmail', async (req, res) => {
    
    const { userEmail } = req.params;
    console.log(userEmail);
    try {
        const response = await db.query("SELECT * FROM todos WHERE user_email = $1", [userEmail]);
        res.json(response.rows)
    } catch (error) {
        console.error(error)
    }
})

app.post('/todos', async(req, res) =>{
    const { user_email, title, progress, date } = req.body;
    console.log(user_email, title, progress, date)
    try {
        const response = await db.query(`INSERT INTO todos(user_email, title, progress, date) VALUES ($1, $2, $3, $4)`, [user_email, title, progress, date]);
        res.json(response);
    } catch (error) {
        console.error(error.message);
    }
})

// EDIT A TODO
app.put('/todos/:id', async(req, res) => {
    const { id } = req.params;
    const {user_email, title, progress, date } = req.body;
    try {
        const editTodo = await db.query('UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;', [user_email, title, progress, date, id]);
        res.json(editTodo);
    } catch (error) {
        console.error(error.message);
    }
})

// DELETE TODO
app.delete('/todos/:id', async(req, res) =>{
    const { id } = req.params;
    try {
        const deleteTodo = await db.query("DELETE FROM todos WHERE id = $1;", [id]);
        res.json(deleteTodo);
    } catch (error) {
        console.error(error)
    }
});

// SIGN UP
app.post('/signup', async(req, res) => {
    const {email, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPwd = bcrypt.hashSync(password, salt)
    try {
        const signUp = await db.query("INSERT INTO users (email, h_password) VALUES($1, $2)", [email, hashedPwd]);
        const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'});
        res.json({email, token});
    } catch (error) {
        console.error(error);
        if(error){
            res.json({detail: error.detail})
        }
    }
})


// LOGIN
app.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try {
        
    } catch (error) {
        console.error(error.message)
    }
})



app.listen(PORT, ()=>{
    console.log(`LISTENING TO PORT http://localhost:${PORT}`)
})