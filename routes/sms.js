const express = require('express');
const router = express.Router();
const request = require('request');

const apiKey = process.env.API_KEY;
const login = process.env.LOGIN;

router.post('/send', (req, res) => {
  const { to, message } = req.body;

  const options = {
    method: 'GET',
    url: `http://painel.kingsms.com.br/kingsms/api.php?acao=sendsms&login=${login}&token=${apiKey}&numero=${to}&msg=${message}`
  };

  request(options, (error, response, body) => {
    if (error) {
      res.status(500).send({ error: 'Internal server error' });
    } else if (body.status === 'error') {
      res.status(400).send({ error: body.message });
    } else {
      res.send(body);
    }
  });
});

module.exports = router;
