const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {
    // Qualquer endereço pode fazer requisição
    res.header("Access-Control-Allow-Origin", "*");
    //Tipos de métodos que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    // Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type");

    // Executar o cors
    app.use(cors());
    //Quando não houver erro deve continuar o processamento
    next();

})

const cadastros = {};

app.get('/cadastro', (req, res) => {
    res.send(cadastros);
})

app.post('/cadastro', (req, res) => {

    const id = randomBytes(4).toString('hex');
    const { name, description, value, available } = req.body;
    
    cadastros[id]= {
        id, name, description, value, available
    };

    res.status(201).send(cadastros[id]);

})

app.listen(4000, () => {
    console.log("Servidor rodando na porta 4000");
})
