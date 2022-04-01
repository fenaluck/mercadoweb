//? Solicitamos las librerias
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

//? Configuramos las carpetas estaticas
app.use(express.static('static'));
app.use(express.static('assets'));
app.use(express.static('node_modules/bootstrap/dist'))

//? Configuramos nunjucks
nunjucks.configure('views', {
    express: app,
    autoescape: true
})

//? Creamos nuestro objetos
const frutas = [
    {
        nombre: 'lechuga',
        url: 'lechuga.png',
        precio: 800
    }, 
        {
        nombre: 'cebollas',
        url: 'cebollas.png',
        precio: 500
    },
        {   
        nombre: 'banana',
        url: 'banana.png',
        precio: 700
        
    },
    {   
        nombre: 'tomate',
        url: 'tomate.png',
        precio: 1000
        
    },
    {
        nombre: 'pimenton',
        url: 'pimenton.png',
        precio: 650
    },
    {
        nombre: 'papas',
        url: 'papas.png',
        precio: 1000
    }
]

//? Generamos la ruta
app.get('/', async(req, res) => {

    res.render('index.html', {
        frutas: frutas
    })
});

app.listen(port, () => console.log(`Ejecutando en el puerto port ${port}`));