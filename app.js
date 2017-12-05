const express = require('express');

const app = express()
const port = process.env.PORT || 3000

const query = require('./db/query.js')

app.set('view engine', 'hbs')
// override with POST having ?_method=DELETE
// app.use(methodOverride('_method'))

app.listen(port, (req,res)=>{
  console.log('RASENGAN!');
})

app.get('/', (req,res)=>
res.redirect('/api')
)

app.get('/api', (req,res)=>{
  res.render('index')
})

app.get('/api/users', (req,res)=>{
  query.getUsers()
  .then((data)=>{
    console.log(data);
    res.json(data)
  })
})

app.get('/api/users/:id', (req,res)=>{
  const id = req.params.id
  query.getOneUser(id)
  .then(data=>{
    res.json(data)
  })
})

app.get('/api/cohorts', (req,res)=>{
  query.getCohorts()
  .then((data)=>{
    console.log(data);
    res.json(data)
  })
})

app.get('/api/cohorts/:id', (req,res)=>{
  const id = req.params.id
  query.getOneCohort(id)
  .then((data)=>{
    console.log(data);
    res.json(data)
  })
})

app.get('/api/daily', (req,res)=>{
  query.daily()
  .then((data)=>{
    console.log(data);
    res.json(data)
  })
})

app.get('/api/daily/:id', (req,res)=>{
  const id = req.params.id
  query.oneDaily(id)
  .then((data)=>{
    console.log(data);
    res.json(data)
  })
})
