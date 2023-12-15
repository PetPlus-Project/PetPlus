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

    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      res.status(401).send('Email ou senha incorretos');
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).send('Email ou senha incorretos');
      return;
    }

    const token = jwt.sign({ userId: user.id }, 'seuSegredoDoJWT', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login bem-sucedido', token });

  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor ao fazer login');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});