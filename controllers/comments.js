let express = require('express')
let db = require('../models')
let router = express.Router()

router.post('/', (req, res) => {
    db.comment.create(req.body)
    .then( () => {
        res.redirect(`/articles/${req.body.articleId}`)
    })
    .catch((error) => {
        console.log(error)
        res.status(400).render('main/404')
    })
  })

  module.exports = router