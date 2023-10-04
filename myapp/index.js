const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory to the current directory (where your application file is located)
app.set('views', __dirname);

const bodyParser = require('body-parser');
const encodeUrl = bodyParser.urlencoded({ extended: true });

app.get('/', (req, res) => {
  res.render('validate_form');
});

const validId = require('./validate');




app.post('/validate', encodeUrl, (req, res) => {
  console.log('form data validation');
  console.log(req.body);
  console.log(req.body.id_code);
  res.send(validId.idInfo(req.body.id_code));
  res.render('validate_result', validId.idInfo(req.body.id_code))
});

app.listen(3000, () => {
  console.log('Example app is started at http://localhost:3000');
});
