const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser);

const PORT = 8082;
app.listen(() => console.log(`Server listening on port: ${PORT}`));