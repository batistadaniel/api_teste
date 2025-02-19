const express = require('express');

const app = express();

const port = 3000;

app.use(express.json()); 

// rota teste
app.get('/', (req, res) => {
    res.send({ message: 'API Funcionando' });
});

// rota para listar itens 
let itens = ["Item 1", "Item 2", "Item 3"];

app.get('/itens', (req, res) => {
    res.json(itens);
});

// rota para adicionar um item

app.post('/itens', (req, res) => {

    const {nome} = req.body;

    if (!nome) {
        return res.status(400).json({ message: 'Nome e obrigatorio' });
    }

    itens.push(nome);
    return res.status(201).json({ message: 'Item adicionado com suceso!', itens });
});

// iniciando o servidor
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});

