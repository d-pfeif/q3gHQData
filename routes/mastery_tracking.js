const express = require('express')
const router = express.Router()

const db = require('../db/connection.js')

router.get('/', (req, res) => {
  res.render('mastery_tracking', {test: 'it works!'} )
})

module.exports = router;
