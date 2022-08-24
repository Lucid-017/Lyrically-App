const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("hello world,testing server")
})

const port = 8887
app.listen(port,()=>{
    console.log(`app listening on port${port}`)
})