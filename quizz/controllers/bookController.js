const book=require('../models/book');

exports.getByBookId=(req,res,next)=>{
    res.status(200).json(book.getByBookId(parseInt(req.params.id)));
};


exports.saveBook=(req,res,next) =>{
    const b=new book(req.body.title, req.body.author).save();

    res.status(200).json(b);
};

exports.getSearch =(req, res, next) =>{

    console.log(req.query.firstname);
    res.status(200).json(book.getSearch(req.query.firstname));
}