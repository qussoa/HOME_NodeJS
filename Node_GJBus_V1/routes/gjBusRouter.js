var express = require('express')
var router = express.Router()

var request = require('request')
var gjStation = require('../models/gjBusStation')
// router를 선언하는 곳에서 (app.js)
// 매개 변수로 config 값을 전달하기 위해
// module,exports를 다른 방법으로 선언
module.exports = function (app,config) {

    /*
        전체데이터 개수가 몇개인지 알려주고
        한페이지에 몇줄씩 보일지 알려주기
        현재 선택된 페이지가 몇번인지 알려주기
    */
    var paginate = require('express-paginate')

    // express framework에서 pagination을 구현할 객체 선언
    // 사용할 수 있도록 초기화
    // 기본 limit 10 최대 50 설정
    app.use(paginate.middleware(10,50))

    // 한페이지에 몇개씩 보여줄것인가를 설정하는 값
    const pageLimit = 10

    // 이하의 router method를 실행하기 전 
    // 먼저 실행해서 변수, setting등을 설정한 후
    // req 요청 후 다음(next) router 전달
    router.all(function(req,res,next){  
        if(req.query.list <= 10) req.query.limit = 10
        next()
    })

    router.get("/bustime", function (req, res) {

        let busstop_id = req.query.id
        let url = config.gjbus.arrive_url
        let apiKey = config.gjbus.apiKey

        apiKey = encodeURIComponent(apiKey)
        let queryParams = "?"
        queryParams += encodeURIComponent("ServiceKey") + "=" + apiKey
        queryParams += "&"
        queryParams += encodeURIComponent("BUSSTOP_ID") + "=" + encodeURIComponent(busstop_id)
        console.log("Q : " + url + queryParams)
        request({
            url: url + queryParams,
            method: 'GET'
        }, function (err, response, body) {
          //  console.log(err)
            var stop_info = JSON.parse(body)
            if (stop_info.RESULT.RESULT_CODE == 'ERROR') {
                // res.send(stop_info.RESULT.RESULT_MSG)
                res.send('도착정보 없음')
            } else {
                res.render("gjbus/bustime", { bustimes: stop_info.BUSSTOP_LIST })
            }
        })




    })//bustime end


    router.get("/searchStation", function (req, res) {

        /*
            mongoose 문자열 검색
            {칼럼명 : 값} : 완전히 일치하는 문자열만 검색
            {칼럼명 : RegExp('^' + 값)}  : 시작문자열 검사 sql에서 값 %
            {칼럼명 : RegExp(값, 'ig')} : 중간문자열 검사 sql에서 % 값 % 
        */

        let station = req.query.station
        gjStation.find({ BUSSTOP_NAME: RegExp(station, 'ig') })
            .sort({ BUSSTOP_NAME: 'asc' })
            .exec(function (err, stations) {
                res.render("gjbus/station_small", { stations: stations })
            })
    })

    router.get("/viewStation", function (req, res) {

        // 현재 선택된 페이지 번호가 req.query에 담겨 전달되었다
        // 받은 페이지 번호에 pageLimit 값을 곱하여
        // 몇번째 데이터부터 읽어올 것인가를 정함
        // offset == skip
        let offset = (req.query.page-1) * pageLimit

        // 조건 검색이 없다는 전제하에
        // 전체 데이터 개수 구하기 
        gjStation.count({})
        .exec(function(err,count){

            
            
            // ceil 정수형으로 바꾸는 역할 뒤에 소수값을 제거 
            let page = Math.ceil(count / pageLimit)
            // 전체데이터가 구해지면
            // 한 페이지 데이터 개수로 나누어 
            // 총 몇페이지가 필요한지 계산
            let pageCount = Math.ceil(count / pageLimit)
            // 한페이지에 보일 데이터(pageLimit)
            // 전체 페이지 개수 (pageCount)
            // 현재 선택된 페이지(req.query.page,)
            // 페이지에서 클릭한 페이지 번호
            // 3가지의 데이터를 paginate getArraypages method한테
            // 전달하면 페이지를 그리는데 필요한 정보가 담긴 pageArray객체를 
            // 자동으로 생성해준다 
            
            
            let pageArray  = paginate.getArrayPages(req)(
                // return 값에 매개변수를 실어서 보냄 
                // let pageMain = pagination.getArrayPages(req)
                // let pageA = pagemain(pageLimit,pageCount,req.query.page)
                pageLimit,pageCount,req.query.page
            )

            // 실제 한페이지에 보여줄 데이터를 읽어오는데(select,find)
            // 위에서 계산한 pageLimit,offset 값을 활요하여 필요한 값만 추출
            gjStation.find({}).limit(pageLimit).skip(offset)
             .exec(function(err,stations){
                 // 데이터 리스트 페이지에 지금까지 생성한 값들을
                 // 전달하여 데이터리스트를 보이고 하단에 페이지 리스트를 보여서
                 // pagination 구현 
                   res.render("gjbus/station",{
                    stations:stations, // 실제 리스트 데이터
                    pageCount:pageCount,
                    itemCount : count, // 전체 개수 
                    currentPage : req.query.page,
                    pages:pageArray
                   })
               })
        })
        // gjStation.findAndCountAll({
            // limit : pageLimit,
            // offset : offset
        // })
        // .then(function(result){
            // let pageCount = Math.ceil(result.count / pageLimit)
            // let pageArray = paginate.getArrayPages(req)(
                // pageLimit,pageCount,req.query.page
            // )
                // res.render("gjbus/station",
                // {
                // stations:result.rows, // 실제 리스트 데이터
                // pageCount:pageCount,
                // itemCount : result.count, // 전체 개수 
                // currentPage : req.query.page,
                // pages:pageArray
                // })
        // })

        // gjStation.find({})
            // .skip(100)
            // .limit(100)
            // .sort({ BUSSTOP_NAME: 'asc' })
            // .exec(function (err, stations) {
                // res.render("gjbus/station", { stations: stations })
            // })
    })// view(get) end

    router.get("/getStation", function (req, res) {
        var url = config.gjbus.station_url
        var apiKey = config.gjbus.apiKey
        apiKey = encodeURIComponent(apiKey)

        var queryParams = '?'
        queryParams += encodeURIComponent('ServiceKey') + "=" + apiKey
        request({
            url: url + queryParams,
            method: 'GET'
        }, function (err, response, body) {
            // json 문자열 형태로 수신된 body에 담긴 정보를
            // json object로 변환 
            var resultjson = JSON.parse(body)
            if (resultjson.RESULT.RESULT_CODE == 'SUCCESS') {
                /*
                정상 수신
                만약 기존 데이터가 있으면 모두 삭제를 하고
                새로운 데이터로 대체
                 */
                gjStation.deleteMany(function () {
                    var station_list = resultjson.STATION_LIST
                    gjStation.collection.insertMany(station_list, function (err, result) {
                        if (err) {
                            res.send("Data Bulk Insert Error")
                        } else {
                            //res.json(result)
                            res.render('gjbus/station',
                                { stations: result.ops })
                        }

                    })
                    // station_list.forEach(function (station) {
                    // var vo = new gjStation(station)
                    // vo.save(function (err, data) {
                    // res.json(data)
                    // })
                    // })
                })
                // res.json(resultjson)
            } else {
                res.write(resultjson.RESULT.RESULT_MSG)
                res.end("데이터 수신 오류")
            }
        })
    }) // getstation end
    return router
}