const express = require('express')
const phones = require('./data.json');
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! so beautiful,wow')
})

app.get('/data',(req,res)=>{

    res.send("hello data")
})

app.get("/phones",(req,res)=>{


    res.send(phones)
})

app.get("/phones/:id",(req,res)=>{


    let id = parseInt(req.params.id)
    console.log(id)

    let data= phones.find((phone)=>phone.id=== id)
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})