const express=require('express');
const bookRouter=require('./routers/bookRouter')
const app=express();

app.use(express.json());
app.use('/book', bookRouter);


app.listen(3000 ,() => console.log('Running 3000'));