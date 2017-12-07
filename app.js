const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

const app = express()
const port = process.env.PORT || 3000

const query = require('./db/query.js')
const masteryTracking = require('./routes/mastery_tracking.js')

app.set('view engine', 'hbs')
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/mastery_tracking', masteryTracking);

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
    console.log(data)
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
    console.log(data)
    res.json(data)
  })
})

app.get('/api/cohorts/:id', (req,res)=>{
  const id = req.params.id
  query.getOneCohort(id)
  .then((data)=>{
    console.log(data)
    res.json(data)
  })
})

app.get('/api/cohorts/users/:id', (req,res)=>{
  const id = req.params.id
  query.getUsersInCohort(id)
  .then((data)=>{
    console.log(data)
    res.json(data)
  })
})

app.put('/api/hq/:id', (req,res)=>{
  const id = req.params.id
  const body = req.body
  query.updateUser(id, body)
  .then(data=>{
    console.log(data)
    res.json(data)
  })
})

app.get('/api/daily', (req,res)=>{
  query.daily()
  .then((data)=>{
    console.log(data)
    res.json(data)
  })
})

app.get('/api/daily/:id', (req,res)=>{
  const id = req.params.id
  query.oneDaily(id)
  .then((data)=>{
    console.log(data)
    res.json(data)
  })
})

app.post('/api/users/new', (req,res)=>{
  query.createUser(req.body)
  .then((newUser)=>{
    console.log(newUser);
    res.json(newUser)
  })
})
