const express = require('express'); //requerir express
const app = express(); // asignar la funcion
const path = require('path'); // funcion

const publicPath = path.join(__dirname, 'public')// resolver ruta
app.use(express.static(publicPath)); //traer los elementos public - recursos estaticos

app.listen(process.env.PORT ||3000, function() {
    console.log('Servidor corriendo en el puerto 3000')
})
 

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'));
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'));
})