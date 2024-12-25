import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Error handling middleware for handling 404 Not Found errors
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Error handling middleware for handling internal server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
