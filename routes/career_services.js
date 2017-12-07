const express = require('express')
const router = express.Router()

const db = require('../db/connection.js')
const query = require('../db/query.js')

router.get('/', (req, res) => {
  query.getAllCareerServices()
  .then((data) => {
    console.log(data)
    res.render('career_services', {data})
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  query.getUsersCS(id)
  .then((data) => {
    res.json(data)
  })
})

router.post('/submissions', (req, res) => {
  const body = req.body

  query.submitCareerServices(body)
  .then((data) => {
    res.json(data)
  })
})

module.exports = router;
