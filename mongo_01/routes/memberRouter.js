// web에서 request한 path 관련 정보를 추출하기 위한 
// 도구(미들웨어) 선언
var express = require("express")
var router = express.Router()


// mongoDB에 CRUD를 구현하기 위한 VO 객체 선언
var memberVO = require("../models/memberVO")

router.get("/list",function(req,res){
    memberVO.find(function(err,data){
        res.render("list",{members:data})
    })
})

router.get("/update/:id",function(req,res){
    var id = req.params.id
    memberVO.findOne({_id : id},function(err,data){
        res.render("write",{
            item:data,
            action:'/member/update',
            pageTitle : '회원정보수정'
        })
    })
})

router.post("/update/:id",function(req,res){
    let id = req.params._id
    memberVO.update({_id:id},{$set:req.body},function(err,data){
        res.redirect("/member/list")
    })
})

router.get("/delete/:id",function(req,res){
    let id = req.params.id
    memberVO.deleteOne({_id:id},function(err,data){
        res.redirect("/member/list")
    })
})

router.get("/insert/",function(req,res){
    let data = new memberVO()    
    res.render("write",{
            item:data,
            action:'/member/update',
            pageTitle : '회원정보추가'
        })
})
router.post("/insert",function(req,res){
    
/*
    req.body에 담겨져 온 데이터를
    newVO 변수에 복사하고
    save() 메서드를 실행한 후
    정상적으로 save() 되면 callback 함수를 실행하여
    현재 DB에 저장된 레코드를 web 확인
 */
let newVO = new memberVO(req.body)
    newVO.save(function(err,data){
        //res.json(data)
        res.redirect("/member/list")
    })
})// router post

router.get("/listjson",function(req,res){
    memberVO.find(function(err,data){
        res.json(data)
    })
})
module.exports =router