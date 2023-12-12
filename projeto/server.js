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
    const { login, password } = req.body;

    // Realize a verificação de autenticação aqui, comparando login e senha com o banco de dados
    const result = await pool.query('SELECT * FROM usuarios WHERE (email = $1 OR username = $1) AND password = $2', [login, password]);

    if (result.rows.length > 0) {
      // Se houver uma correspondência, você pode gerar um token JWT e enviá-lo de volta para o cliente

      // Exemplo simples de geração de token:
      const token = jwt.sign({ login }, 'your-secret-key');

      res.status(200).json({ token });
    } else {
      // Se não houver correspondência, envie uma mensagem de erro
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor ao tentar fazer login');
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});


