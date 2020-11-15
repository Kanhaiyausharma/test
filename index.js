let express = require('express');

let app = express();

app.get('/',(req,res)=>{
    console.log(process.env.dbuser);
    res.send('app starteddd');
});

port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('listening on port '+port);
})