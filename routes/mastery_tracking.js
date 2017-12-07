const express = require('express')
const router = express.Router()

const db = require('../db/connection.js')
const query = require('../db/query.js')

router.get('/', (req, res) => {
  query.getAllMastery()
  .then((data)=>{
    console.log(data)
    res.render('mastery_tracking', {data})
  })
})

router.post('/submissions', (req, res) => {
  const body = req.body

  query.submitMastery(body)
  .then((data) => {
    res.json(data)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  query.getUsersMastery(id)
  .then((data) => {
    res.json(data)
  })

})

module.exports = router;
