const express =require('express');
const app = express()
const axios=require('axios');
const cors = require('cors')


app.use(cors({
  origin: '*'
}))
app.get(':endpoint([\\/\\w\\.-]*)',function(req,res){

 let endpoint ='http://realits.ml:30167/api/v1' + req.params.endpoint
 //let endpoint = 'http://3.109.1.20:10086'+ req.params.endpoint


  axios.get(endpoint).then(response=>{

res.json(response.data)
  }).catch(error=>{
res.json(error)
  })

})
// app.get(':jobendpoint([\\/\\w\\.-]*)',function(req,res){

//   let jobendpoint ='http://realits.ml:30168/' + req.params.jobendpoint



//    axios.get(jobendpoint).then(response=>{

//  res.json(response.data)
//    }).catch(error=>{
//  res.json(error)
//    })

//  })

app.listen(3000)
console.log('Node server running on port 3000');
