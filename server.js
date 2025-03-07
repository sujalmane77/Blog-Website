require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const mysql = require('mysql2');

const db = mysql.createPool({
    connectionLimit: 10,  // Allows up to 10 simultaneous connections
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL database');
    connection.release(); // Release the connection after checking
});


// API Route to Get All Posts
app.get('/api/posts', (req, res) => {
    const sql = 'SELECT * FROM posts ORDER BY created_at DESC';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// API Route to Add a New Post
app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;
    const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)';
    db.query(sql, [title, content], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, title, content });
    });
});

// Serve HTML File
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
