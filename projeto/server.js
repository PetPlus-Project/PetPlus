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
    const { username, email, cpf, dob, phone, password, confirmPassword } = req.body;

    // Verificar se a senha e a confirmação da senha correspondem
    if (password !== confirmPassword) {
      return res.status(400).send('Senha e confirmação de senha não correspondem.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Certifique-se de que está passando um valor de string para os campos 'username', 'email', etc.
    await pool.query('INSERT INTO usuarios (username, email, cpf, dob, phone, password) VALUES ($1, $2, $3, $4, $5, $6)',
    
      [username, email, cpf, dob, phone, hashedPassword]);

    res.status(201).send('Usuário cadastrado com sucesso!'+
    this.email+this.cpf+this.dob+this.phone+this.password+this.confirmPassword)


  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor ao cadastrar usuário');
  }
});
// Login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query('SELECT * FROM usuarios WHERE username = $1', [username]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token = jwt.sign({ username: user.username }, 'seu_segredo_secreto');
        res.status(200).json({ token });
      } else {
        res.status(401).send('Senha incorreta');
      }
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao fazer login');
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});


