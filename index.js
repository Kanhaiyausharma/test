let express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.send('app starteddd');
});

port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('listening on port '+port);
})