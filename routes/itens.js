const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /itens - Busca todos os jogos no MySQL e renderiza a página
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM itens ORDER BY id DESC');
    res.render('itens', {
      title: 'Loja de Videogames - Catálogo',
      itens: rows
    });
  } catch (err) {
    next(err);
  }
});

// POST /itens - Grava um novo jogo no MySQL e redireciona para a lista
router.post('/', async (req, res, next) => {
  const { titulo, plataforma, genero, preco, estoque } = req.body;
  try {
    await db.query(
      'INSERT INTO itens (titulo, plataforma, genero, preco, estoque) VALUES (?, ?, ?, ?, ?)',
      [titulo, plataforma, genero, preco, estoque]
    );
    res.redirect('/itens');
  } catch (err) {
    next(err);
  }
});

module.exports = router;