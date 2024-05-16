const Book=require('../models/book');

exports.getAll=(req,res) =>{
    res.status(200).json(Book.getAll());
}

exports.getBookById =(req, res)=>{
    res.status(200).json(Book.getBookById(parseInt(req.params.id)));
}

exports.save =(req, res)=>{
    const book=new Book(req.body.title,req.body.isbn,req.body.publishedDate, req.body.author).save();

    res.status(201).json(book);
}
exports.deleteById =(req, res)=>{
    res.status(200).json(Book.deleteById(parseInt(req.params.id)));
}
exports.updateById =(req, res)=>{
    console.log('BookController',req.params.id);
    new Book(req.body.title,req.body.isbn,req.body.publishedDate, req.body.author).update(parseInt(req.params.id));

    res.status(204).end();
}