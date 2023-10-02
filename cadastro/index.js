const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors());

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
