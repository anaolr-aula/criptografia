const repository = require('../repository/repository');

const express = require('express');

const cors = require('cors');

const bcrypt = require('bcrypt')

const app =express();
app.use(cors());
app.use(express.json());

app.post("/registro", async (req, res) => {
    const { login, senha } = req.body;

    if (!login || !senha) {
        return res.status(400).json({ erro: "Login e senha obrigatórios" });
    }

    try {
        const senhaHash = await bcrypt.hash(senha, 10);
        const registro = { login, senhaHash };

        repository.adicionar(registro, (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro);
            }
            res.status(201).json({ mensagem: "Criado com sucesso!" });
        });

    } catch (err) {
        res.status(500).json({ erro: "Erro ao criptografar senha" });
    }
});


module.exports = app;