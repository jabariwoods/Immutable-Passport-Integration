const express = require('express');
const router = express.Router();
const posts = [];

router.get('/posts', (req, res) => {
  res.render('posts', { posts });
});

router.post('/create-post', (req, res) => {
  const { text } = req.body;
  if (text) {
    posts.push({ text, author: req.user.nickname });
    res.redirect('/posts');
  } else {
    res.status(400).send('Invalid data');
  }
});

module.exports = router;

