let express = require('express');
let mongoose = require('mongoose');
var requestIp = require('request-ip');


let app = express();

let dbuser=process.env.dbuser || 'ktest';
let dbpw = process.env.pass || '23ZtXLhiwyKv3CWe';

mongoose.connect('mongodb+srv://'+dbuser+':'+dbpw+'@cluster0.fzeng.mongodb.net/sample_airbnb?retryWrites=true&w=majority',{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log('mongodb connected');
}).catch((e)=>{  console.log(e); });

let listingSchema = new mongoose.Schema({
    listing_url:{type:String}
},{collection:'listingsAndReviews'});

let listingsrmodle = mongoose.model('listingSchema',listingSchema);


app.get('/',(req,res)=>{
    listingsrmodle.find({},(err,result)=>{
        if(err){
            res.status(400).send(err.message);
        }else{
            res.status(200).send(result);
        }
    }).limit(3);
});

port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('listening on port '+port);
})