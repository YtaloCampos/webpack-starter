const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const port = process.env.PORT || 3001;

const app = express();

app.use(serveStatic(path.join(__dirname, './public')));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})