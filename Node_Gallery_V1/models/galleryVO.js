var mongoose = require('mongoose')
/*
    mongodb는 원칙적으로 table 구조가 없는 상태
    mongoose를 사용함으로서
    마치 RDBMS처럼 table구조를 생성하여 사용

    사용중 collection 구조를 변경등을 했을시
        (colunm추가 삭제 이름변경)
    변경한 구조가 실제 db에 반영이 안되거나 
    데이터가 잘 못 추가되는 경우가 있다
    -> mongoDB console에서 collection 삭제 후 다시 project 실행 
*/
var galleryVO = mongoose.Schema({

    gStrTitle : String,
    gStrText : String,
    gUploadPhotoName : String,
    gOriginalPhotoName : String,
    gUploadStartDate :{
        type : Date,
        default : Date.now()
        }
})
module.exports = mongoose.model("tbl_gallery",galleryVO)