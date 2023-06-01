const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const axios = require("axios");

const puerto = process.env.PORT || 3001;

app.set('port', puerto)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(app.get("port"), () => console.log("Servidor Corriendo"));

app.get('/', (req, res) => { 

    const options = {
        method: 'GET', 
        url: req.query.urlCompleta
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

app.post('/', (req, res) => { 

    const options = {
        method: 'POST',
        url: req.query.urlCompleta,
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

app.put('/', (req, res) => { 
    
    const options = {
        method: 'PUT',
        url: req.query.urlCompleta,
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

app.delete('/', (req, res) => { 
    
    const options = {
        method: 'DELETE',
        url: req.query.urlCompleta,
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});