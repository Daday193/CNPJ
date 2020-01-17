const express = require('express');
const request = require('request')

const app = express();
const port = 3001;

const cnpj = '33220124000131'
const url = 'https://www.receitaws.com.br/v1/cnpj/'


request(url+cnpj,(error, response,body)=>{
    data = JSON.parse(body);
    console.log( 'CNAE - ' + data['atividade_principal'][0]['code'] )
    console.log( 'NOME - ' + data['nome'] )
    console.log( 'CNPJ - ' + data['cnpj'] )
});

app.listen(port, () => {
    console.log('Server running on port '+ port)
});