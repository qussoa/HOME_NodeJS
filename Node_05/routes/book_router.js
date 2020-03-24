var exress = require('express');
var router = exress.Router();

var bookVO = require("../domain/bookVO")

router.get("/list",function(req,res){
    bookVO.find(function(err,data){
        res.render("list",{book:data})
    })
    
})
router.get("/insert/", function(req,res){
    let data = new bookVO()
      res.render("input",{
          item:data,
          action:'/book/update',
          pageTitle : '도서정보추가'
      })
})

router.post("/insert",function(req,res){
    let newVO = new bookVO(req.body)
    newVO.save(function(err,data){
        res.redirect("/book/list")
    })
    
})
router.get("/update/:id",function(req,res){
    var id = req.params.id
    bookVO.findOne({_id:id},function(err,data){
        res.render("input",{
            item:data,
            action:'/book/update',
            pageTitle : '도서정보수정'
        })
    })
    
})
router.post("/update/:id",function(req,res){
    let id = req.params._id
    bookVO.update({_id:id},{$set:req.body},function(err,data){
        res.redirect("/book/list")
    })
    
})
router.get("/delete/:id",function(req,res){
    let id = req.params.id
    bookVO.deleteOne({_id:id},function(err,data){
        res.redirect("/book/list")
    })
    
})
module.exports = router