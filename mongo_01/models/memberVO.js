/*
    mongoDB mongoose를 사용하여 ODM(ORM) 방식으로 
    사용하기 위해서
    임의 table 형식의 데이터 구조화를 위한 클래스를 선언
*/

var mongoose = require("mongoose")
// 4개의 속성(필드)변수를 갖는 memberVO 선언
var memberModel = mongoose.Schema({
    strName : String,
    strAddr : String,
    strTel : String,
    intAge : Number
})

// 다른 js 파일(클래스)에서 사용할 수 있도록 export
// model.exports 항목이 설정된 js 파일은
// 클래스라고 인식
module.exports = mongoose.model("member",memberModel)