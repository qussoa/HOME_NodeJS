var express = require('express');
var router = express.Router();

router.get("/:data/list",function(req,res){
    /*
        Resourse 지향형 
    */
    let data = req.params.data
    if(data == 'book'){
        bookVO.find({},function (err,data) {
            res.json(data)
        })

    }else if(data == 'member'){
         member.find()
    }else if(data == 'address'){
        addressVO.find()
    }
res.end("list")
})

router.get("/:data/insert",function(req,res){
    //res.render("write")
    res.end("insert")
})
router.post("/:data/insert",function(req,res){
    // 데이터 추가 
    res.end("insert_post")
})
router.get("/:data/:id/update/:id",function(req,res){
    // id 기준으로 1개의 데이터를 조회
    // render에 건내주는 코드 
    //res.render("write")
    res.end("update")
})
router.put("/:data/:id/update/:id",function(req,res){
    // update post일때는 put 권장
    res.end("update_put")

})
router.delete("/:data/:id/delete/:id",function(req,res) {
    // get 대신 delete  권장
    res.end("delete_delete")
})
module.exports = router