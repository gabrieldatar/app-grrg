const express=require('express');
const app=express();


const db_produtos={
    produtos:[
        {id:1,descricao:"Toddy 800gr",preco:12.00},
        {id:2,descricao:"Leite Longa Vida 1L",preco:5.00},
        {id:3,descricao:"Arroz Tio João 5K",preco:30.00},
    ]
}


app.get('/api/produtos',(req,res)=>{
    res.status(200).json(db_produtos)
})


app.get('/api/produtos/:id',(req,res)=>{
    let id=parseInt(req.params.id)
    let idx=db_produtos.produtos.findIndex((elem) => elem.id===id)
    
    if(idx>-1){
        res.status(200).json(db_produtos.produtos[idx])    
    }else{
        res.status(404).json({message:"Produto não encontrado."})
    }  
})


let port=process.env.PORT || 3000;


app.listen(3000,()=>{
    console.log('Listening on port 3000');
})

// createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('Hello World')
// })