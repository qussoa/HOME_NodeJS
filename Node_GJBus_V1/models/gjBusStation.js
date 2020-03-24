var mongoose = require('mongoose')
var ghStation = mongoose.Schema({
    STATION_NUM : String,
    BUSSTOP_ID : String,	
    BUSSTOP_NAME :String,
    NAME_E      : String,
    LONGITUDE	: String,
    LATITUDE : String,
    ARS_ID : String,
    NEXT_BUSSTOP : String 
})

module.exports = mongoose.model('gjstation',ghStation)

// STATION_NUM  레코드 구분	5	1	1	
// BUSSTOP_ID	정류소 ID	5	1	2513	
// BUSSTOP_NAME	정류소 명(국문)	30	1	동원촌	
// NAME_E       정류소 명(영문)	60	1	Dongwonchon	
// LONGITUDE	위도	13	1	126.82839444	
// LATITUDE     경도
// ARS_ID       전화
// NEXT_BUSSTOP 다음 정류장 