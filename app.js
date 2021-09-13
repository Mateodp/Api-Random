
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('recivido');
})
app.get('/numero/:numInicial/:numFinal',(req,res) => {
    
    const numeroInicial = parseInt(req.params.numInicial);
    const numeroFinal = parseInt(req.params.numFinal);

    const resultado = Math.floor(Math.random() * (numeroInicial - numeroFinal)) + numeroInicial ;

    res.json(resultado);
    
})

app.listen(3000, () =>{
    console.log('servidor en el puerto 3000');
})