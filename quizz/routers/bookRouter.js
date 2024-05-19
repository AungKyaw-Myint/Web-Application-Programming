const express=require('express');
const bookController= require('../controllers/bookController');
const router=express.Router();

router.get('/:id', bookController.getByBookId);
router.post('/', bookController.saveBook);
router.get('/', bookController.getSearch)

module.exports=router;