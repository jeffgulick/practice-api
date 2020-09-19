const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();


const port = process.env.PORT || 4000;


app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });
   