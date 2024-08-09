const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');

app.use(cors());
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

app.listen(PORT, ()=>{
    console.log(`LISTENING TO PORT http://localhost:${PORT}`)
})