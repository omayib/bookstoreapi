let router = require('express').Router();
var bookController = require('./controller/bookController')


router.get('/books', function (req, res) {
    bookController.get()
        .then((books)=>{
            res.status(200).send({
                data: books
            });
        },(message)=>{

            res.status(400).send({
                message: message
            });
        })
        .catch((message)=>{
            res.status(400).send({
                message: message
            });

        })
});
router.get('/books/:id', function (req, res) {
    bookController.getById(req.params.id)
        .then((books)=>{
            res.status(200).send({
                data: books
            });
        },(message)=>{

            res.status(400).send({
                message: message
            });
        })
        .catch((message)=>{
            res.status(400).send({
                message: message
            });

        })
});
router.post('/books',(req,res)=>{
    const title = req.body.title
    const author = req.body.author
    const year = req.body.year
    const cover = req.body.cover
    const book = {
        title:title,
        author:author,
        year:year,
        cover:cover
    }
    bookController.insert(book)
        .then((books)=>{

            res.status(200).send({
                data: books
            });
        },(message)=>{

            res.status(400).send({
                message: message
            });
        })
        .catch((message)=>{
            res.status(400).send({
                message: message
            });

        })
})

router.delete('/books/:id',(req,res)=>{
    bookController.delete(req.params.id)
        .then((books)=>{

            res.status(200).send({
                data: books
            });
        },(message)=>{
            res.status(400).send({
                message: message
            });
        })
        .catch((message)=>{
            res.status(500).send({
                message: message
            });
    })
})

router.put('/books/:id',(req,res)=>{
    const title = req.body.title
    const author = req.body.author
    const year = req.body.year
    const cover = req.body.cover
    const id = req.params.id
    const book = {
        title:title,
        author:author,
        year:year,
        cover:cover,
        id:id
    }
    bookController.update(book)
        .then((books)=>{

            res.status(200).send({
                data: books
            });
        },(message)=>{

            res.status(400).send({
                message: message
            });
        })
        .catch((message)=>{
            res.status(400).send({
                message: message
            });

        })
})
module.exports = router;