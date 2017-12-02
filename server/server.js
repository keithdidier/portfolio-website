const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser);

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const PORT = 8082;
app.listen(() => console.log(`Server listening on port: ${PORT}`));