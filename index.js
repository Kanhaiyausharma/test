let express = require('express');
let mongoose = require('mongoose');
var requestIp = require('request-ip');


let app = express();

let dbuser=process.env.dbuser || 'ktest';
let dbpw = process.env.pass || '23ZtXLhiwyKv3CWe';

mongoose.connect('mongodb+srv://'+dbuser+':'+dbpw+'@cluster0.fzeng.mongodb.net/sample_airbnb?retryWrites=true&w=majority',{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log('mongodb connected');
}).catch((e)=>{  console.log(e); });

app.get('/',(req,res)=>{
    var clientIp = requestIp.getClientIp(req);
    console.log(clientIp);
    console.log(process.env.dbuser);
    res.send('app starteddd');
});

port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('listening on port '+port);
})