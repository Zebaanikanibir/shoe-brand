import express  from "express";
import data from "./data.js";



const app = express();

app.get('/api/megaStore',(req, res)=>{
    res.send(data.data)
       
   })

app.get('/', (req, res) =>{
    res.send('server side ready')
})
app.listen(5001, () =>{

    console.log('server at http://localhost:5001')
})