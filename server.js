const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors'); 
const path = require('path'); // Added to work with file paths
const app = express();
const PORT = 3000;

app.use(cors());


const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Database connected successfully.');

        // Create table if not exists

        
    }
});

app.use(express.json());

// Serve static files (CSS, JavaScript, etc.) from the 'public' directory

app.get('/api/functions2', (req, res) => {
    const searchTerm = req.query.term;
    console.log('Received search term:', searchTerm);
    const query = `SELECT * FROM functions2 WHERE LOWER(functionName) LIKE '%${searchTerm}%' OR LOWER(description) LIKE '%${searchTerm}%'`;

    db.all(query, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});
app.get('/api/functions', (req, res) => {
    const searchTerm = req.query.term;
    console.log('Received search term:', searchTerm);
    const query = `SELECT * FROM functions WHERE LOWER(functionName) LIKE '%${searchTerm}%' OR LOWER(description) LIKE '%${searchTerm}%'`;

    db.all(query, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});
// Handle requests for the root URL

app.use(express.static(path.join(__dirname, 'doc')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
