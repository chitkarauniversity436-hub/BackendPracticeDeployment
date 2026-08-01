require('dotenv').config()
const express = require('express');
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fuckit', (req, res) => {
  res.send('Stay Hard!')
})


app.get('/name',(req,res)=>{
   res.send('My name is Tarun');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

