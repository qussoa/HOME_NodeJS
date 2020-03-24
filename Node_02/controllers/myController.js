var express = require('express')
var router = express.Router()

// /hello/ 함께 path mapping이된다
router.get("/", function (req,res) {
    res.write("hello")
    res.end("end")
})
const retdata = {
    nation : "Korea",
    name : "Hong KilDong",
    age : 30
}
router.get("/json",function(req,res){
    
    res.json(retdata)
})

// router의 call 함수의 파라메터
// 첫번째 파라메터는 web에서 전송되는 request 정보가 담긴 변수
// 두번째 파라메터(res) 는 
router.get("/view",function(req,res){
 res.render("myview",
        {
        nation:'Korea',
        name:'Hong KilDong',
        age:22

    })
})

router.get("/model",function(req,res){
    res.render("mymodel",{mydata:retdata})
})

/*
서버에 request요청할때 query String으로 데이터를 보내면
req.query 객체를 참조하여 값을 받을 수 있다 
*/
router.get("/insert",function(req,res){
    let name = req.query.name
    let nation = req.query.nation
    let retdata = {name:name,nation:nation}
    res.json(retdata)
})

//pathvariable 방식으로 데이터를 받기 
router.get("/update/:id/:age",function(req,res){
 let id = req.params.id
 let age = req.params.age
 let retdata = {id:id, age:age}
 res.json(retdata)
})

router.get("/add",function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    res.end("숫자 입력")
})


router.get("/add/:num1",function(req,res){
  res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    res.end("덧셈을 수행시 2개 숫자를 보내기")
})
router.get("/add/:num1/:num2",function(req,res){
    let intNum1 = parseInt(req.params.num1)
    let intNum2 = parseInt(req.params.num2)

    let ret = {
        숫자1 : intNum1,
        숫자2 : intNum2,
        합계 : intNum1 + intNum2
    }
    res.json(ret)
})
module.exports = router