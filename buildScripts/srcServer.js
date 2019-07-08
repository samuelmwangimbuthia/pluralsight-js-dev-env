import express from'express'; //call express dependency
import path from'path'; //reference to path
import open from 'open';  //open a site in the browser
import webpack from "webpack";
import config from '../webpack.config.dev.js';

const port = 3030; // a variable that stores the port
const app = express (); // create an instance of express and set that to variable app
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath: config.output.publicPath
}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});
app.listen(port,function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:'+port);
    }
})
