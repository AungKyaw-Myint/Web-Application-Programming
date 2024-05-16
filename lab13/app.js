const express=require('express');
const bookRouter=require('./routes/bookRouter')
const app=express();

app.use(express.json());
app.use('/book',bookRouter);

app.use((error, req, res, next) =>{
    res.status(500).json({success:false, message:error.message});
});

app.listen(3000, ()=>console.log('listen on 3000'))