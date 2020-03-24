var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var book ={
    name : "자바",
    writer : "이몽룡",
    comp : "영진",
    year : 2020
  }
  
  var books =[
    {name : 'K1'},
    {name : '<b>K2</b>'},
    {name : 'K3'},
    {name : 'K4'},
    {name : 'K5'}
  ]

  res.render('index', { title :  '연습' ,
  book : book,
  books : books 
}
  
  );
});


  

module.exports = router;
