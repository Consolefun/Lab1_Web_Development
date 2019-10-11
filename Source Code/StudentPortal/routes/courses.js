var express = require('express');
var router = express.Router();
var Courses = require('../models/courses.js');


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('Express RESTful API');
// });

/* GET ALL Courses */
router.get('/', function (req, res, next) {
  Courses.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Courses BY ID */
router.get('/:id', function (req, res, next) {
  Courses.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Courses */
router.post('/', function (req, res, next) {
  Courses.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Courses */
router.put('/:id', function(req, res, next){
  Courses.findByIdAndUpdate(req.params.id, req.body, function (err, post){
    if (err) return next(err);
    res.json(post);
  })
})
/* DELETE Courses */
router.delete('/:id', function(req, res, next){
  Courses.findByIdAndDelete(req.params.id, function (err, post){
    if (err) return next(err);
    res.json(post);
  })
})
module.exports = router;
