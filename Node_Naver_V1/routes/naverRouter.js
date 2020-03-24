var naver = require("../config/naver_secret")
var express = require('express')

var router = express.Router()
var request = require('request')

var reqOptions = (api_url) => {
    var options = {
        url: api_url,
        headers: {
            'X-Naver-Client-Id': naver.client_id,
            'X-Naver-Client-Secret': naver.client_sec

        }
    }
    return options
}

/*
    module.exports = function() {} 의 구조
    모듈을 사용하는 곳에서 어떤 값을 매개변수로 
    전달하고자 할 때 사용하는 코드 

    module.export = function() {}
    => module.exports = ()=>{
    () =>{}
    화살표 함수 ES5이상에서 사용할 수 있는 단축형 함수
    단점 변수 scope가 상당히 민감하다
    this라는 키워드의 변수는 scope 때문에
    사용하면서 많은 테스트를 수행해야한다

    function방식의 함수와는 다르게 작동되기 때문

*/

module.exports = (app) => {

    //router.get('/',function(req,res){
    router.get('/', (req, res) => {
        res.json(naver)
    })

    router.get('/movie', (req, res) => {
        let searchName = req.query.search
        let api_url = naver.movie_url
        api_url += '?query=' + encodeURI(searchName)

        request.get(reqOptions(api_url), (err, Response, body) => {
            // error가 있을시 console 표출
            if (err) {
                console.log(err)
                res.send(Response.statusMessage)
            } else if (Response.statusCode == 200) {

                var naverJson = JSON.parse(body).items
               // res.json(naverJson)
               res.render('movie/list',{movies:naverJson})
            }else{
                res.send("unKnown Error Response")
            }
        })
    })
    return router

}