var express=require("express");
var app=express();

app.use(express.static('public'));
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/css',express.static(__dirname + 'public/css'))

app.set("views",'./src/views')
app.set('view engine','ejs')

const newsRouter = require('./src/routes/news')

app.use('/',newsRouter)

app.listen(5000,function(){

})

/*
app.get("/",function(req,res){
//   res.send("HELLO WORLD")
    res.sendFile(__dirname + "./src/views/MainPage.html",function(err){
        if(err) res.send(404);

    })
});

app.get(/(.*)\.(css|js|txt)/i, function(req, res) {
    res.sendFile(__dirname + "/js/" + req.params[0] + "." + req.params[1], function(err) {
        if (err) res.send(404);
    });
});


app.get("/mypath",function(req,res){
    res.send("it is a path")
    
})

app.listen(3000,function(){
    console.log("it is ok")

});
*/