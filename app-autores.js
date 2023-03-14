const {createAutores,getAutoresById,getAllAutores,updateAutores,deleteAutores} = require('./controller/autores-controller');
const express = require('express');
const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
  });

app.post('/autores', createAutores);
app.get('/autores', getAllAutores);
app.get('/autores/:codigo', getAutoresById);
app.put('/autores/:codigo', updateAutores);
app.delete('/autores/:codigo', deleteAutores);

app.listen(8000)