const sslRedirect = require('heroku-ssl-redirect').default;
const express = require('express');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001; 
const app = express();
app.use(sslRedirect());

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    })
  })
  
    

