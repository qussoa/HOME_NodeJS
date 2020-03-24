var express = require('express');
var router = express.Router();

router.get("/list",function(req,res){
res.end("list")
})
/*
데이터 지향형
*/
router.get("/insert",function(req,res){
    //res.render("write")
    res.end("insert")
})
router.post("/insert",function(req,res){
    // 데이터 추가 
    res.end("insert_post")
})
router.get("/update/:id",function(req,res){
    // id 기준으로 1개의 데이터를 조회
    // render에 건내주는 코드 
    //res.render("write")
    res.end("update")
})
router.put("/update/:id",function(req,res){
    // update post일때는 put 권장
    res.end("update_put")

})
router.delete("/delete/:id",function(req,res) {
    // get 대신 delete  권장
    res.end("delete_delete")
})
module.exports = router