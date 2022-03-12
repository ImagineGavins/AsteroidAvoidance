const express = require('express') // const dont change, let can change
const app = express()
const path = require('path')
const port = process.env.port||5000

app.use(express.static(__dirname))

app.get('/', (request, response)=>{
    response.sendFile(__dirname+"/index.html")
})

// app.listen sets up a connection
app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
})