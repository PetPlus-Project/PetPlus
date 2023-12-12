// server.js
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'conexao',
  password: 'postgres',
  port: 5432,
});

app.use(bodyParser.json());

// Cadastro
app.post('/signup', async (req, res) => {
  try {
    const { username, email, cpf, dob, phone, password } = req.body; // Corrija as propriedades aqui

    const hashedPassword = await bcrypt.hash(password, 10);

    // Certifique-se de que está passando um valor de string para os campos 'username', 'email', etc.
    await pool.query('INSERT INTO usuarios (username, email, cpf, dob, phone, password) VALUES ($1, $2, $3, $4, $5, $6)',
      [username, email, cpf, dob, phone, hashedPassword]);

    res.status(201).send('Usuário cadastrado com sucesso!');

  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor ao cadastrar usuário');
  }
});
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Realize a verificação de autenticação aqui, compare a senha com o hash no banco de dados, etc.

    // Se a autenticação for bem-sucedida, você pode gerar um token JWT e enviá-lo de volta para o cliente

    // Exemplo simples de geração de token:
    const token = jwt.sign({ email }, 'your-secret-key');

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor ao tentar fazer login');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});


