let express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.send('app starteddd');
});


app.listen(3000,()=>{
    console.log('listening on port 3000');
})