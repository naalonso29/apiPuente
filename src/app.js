const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const axios = require("axios");

const puerto = process.env.PORT || 3001;

app.set('port', puerto)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(app.get("port"), () => console.log("Servidor Corriendo", puerto));

app.get('/', (req, res) => {
    
    const options = {
        method: 'GET', 
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

app.get('/ventasDesde', (req, res) => {
    
    const options = {
        method: 'GET', 
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token + "&fecha_desde=" + req.query.fecha_desde
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

app.get('/masIdPublicacion', (req, res) => {
    
    const options = {
        method: 'GET', 
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token + "&idPublicacion=" + req.query.idPublicacion
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
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token,
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
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token,
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
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token,
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});