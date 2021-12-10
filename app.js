const express = require('express'); //requerir express
const app = express(); // asignar la funcion
const path = require('path'); // funcion

const publicPath = path.join(__dirname, 'public')// resolver ruta
app.use(express.static(publicPath)); //traer los elementos public - recursos estaticos

app.listen(3000,()=>{  //correr servidor
    console.log("Server Run")
})


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'));
})