const express = require('express');
const router = express.Router();

router.get('/mine', function(req, res) {
  res.render('mine',
    {
      title: 'My page',
      example: 'This is my page that I created'
    }
  )
});

module.exports = router;