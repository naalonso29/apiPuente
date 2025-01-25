const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const axios = require("axios");

const puerto = process.env.PORT || 3001;

app.set('port', puerto)

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

/*app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());*/

app.listen(app.get("port"), () => console.log("Servidor Corriendo", puerto));

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

app.post('/crearVariante', (req, res) => { 

    const options = {
        method: 'POST',
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token + "&idProducto=" + req.query.idProducto,
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

app.post('/crearImagen', (req, res) => { 

    const options = {
        method: 'POST',
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token + "&idProducto=" + req.query.idProducto,
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

app.put('/editarProducto', (req, res) => { 
    
    const options = {
        method: 'PUT',
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token + "&idProducto=" + req.query.idProducto,
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

app.put('/editarVariante', (req, res) => { 
    
    const options = {
        method: 'PUT',
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token + "&idProducto=" + req.query.idProducto + "&idVariante=" + req.query.idVariante,
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

app.put('/editarCategoria', (req, res) => { 
    
    const options = {
        method: 'PUT',
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token + "&idCategoria=" + req.query.idCategoria,
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

app.delete('/borrarImagen', (req, res) => { 
    
    const options = {
        method: 'DELETE',
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token + "&idProducto=" + req.query.idProducto + "&idImagen=" + req.query.idImagen,
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

app.delete('/borrarCategoria', (req, res) => { 
    
    const options = {
        method: 'DELETE',
        url: req.query.urlCompleta + "?" + "userId=" + req.query.userId + "&token=" + req.query.token + "&idCategoria=" + req.query.idCategoria,
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});

/**************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************/
/********************************************************    METODOS PARA LA WEB DE ANSAR    ******************************************************************/
/**************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************/


app.get('/puenteWebAnsar', (req, res) => { 

    let tienda = req.query.tienda
    let token = req.query.token

    const options = {
        method: 'GET',
        url: req.query.urlCompleta,
        headers: {
            'Authorization': token
        },
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});


app.post('/puenteWebAnsar', (req, res) => { 

    let tienda = req.query.tienda
    let token = req.query.token

    const options = {
        method: 'POST',
        url: req.query.urlCompleta,
        headers: {
            'Authorization': token
        },
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});


app.put('/puenteWebAnsar', (req, res) => { 

    let tienda = req.query.tienda
    let token = req.query.token

    const options = {
        method: 'PUT',
        url: req.query.urlCompleta,
        headers: {
            'Authorization': token
        },
        data: req.body
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });

});