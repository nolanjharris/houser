require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');
const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected B-)');
})

app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.addHouse);
app.delete('/api/houses/:id', controller.deleteHouse);

app.listen(process.env.SERVER_PORT, () => console.log('Listening on port ' + process.env.SERVER_PORT))