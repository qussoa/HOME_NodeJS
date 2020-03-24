var mongoose = require('mongoose')
var book = mongoose.Schema({
    search : String, // 검색어로 사용하기 위한 칼럼
    isbn: {
        type : String,
        unique : true  // 같은 도서는 저장 금지 
    }, 
    title: String,        
    link: String,	     
    image: String,        
    author: String,       
    price: String,        
    discount: String,     
    publisher: String,    
    description: String,
    pubdate: String
})

module.exports = mongoose.model('tbl_naver_book', book)

//	검색 결과 문서의 제목을 나타낸다. 제목에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
//  검색 결과 문서의 하이퍼텍스트 link를 나타낸다.
// 	썸네일 이미지의 URL이다. 이미지가 있는 경우만 나타납난다.
//	저자 정보이다.
//	정가 정보이다. 절판도서 등으로 가격이 없으면 나타나지 않는다.
//	할인 가격 정보이다. 절판도서 등으로 가격이 없으면 나타나지 않는다.
//	출판사 정보이다.
//	ISBN  넘버이다.
//  검색 결과 문서의 내용을 요약한 패시지 정보이다. 문서 전체의 내용은 link를 따라가면 읽을 수 있다. 패시지에서 검색어와 일치하는 부분은 태그로 감싸져 있다.

	// N	-	책 제목 검색	상세 검색만 해당
	// N	-	저자명 검색	상세 검색만 해당
	// N	-	목차 검색	상세 검색만 해당
	// N	-	isbn 검색	상세 검색만 해당
	// N	-	출판사 검색	상세 검색만 해당
	// N	(ex.20000203)	출간 시작일	상세 검색만 해당
    // N	(ex.20000203)	출간 종료일	상세 검색만 해당
    
    
    
    
    
    
    
    
    
    
    