# 이미지 파일 업로드

## multer 미들웨어를 활요한 이미지 업로드 게시판
## mongodb와 mongoose를 연동하여 데이터 CRUD 구현 

## MongoDB 용어 정리
 
 # db
    * RDBMS에서 DB와 같은 역할을 하여 main Schema
    * show dbs : db들의 목록을 확인
    * use mydb : mydb라는 이름으로 Schema를 생성하거나, 이미 있으면 사용할 수 있도록 open

 # collection
    * RDBMS에서 TABLE과 같은 역할을 하여 실제 데이터가 저장되는 작은 공간
    * show collection : collections의 목록 확인, 반드시 use db 실행 후
    * db.collection.query명령
    * db.tbl_books.insert/save({변수 : 값}) : tbl_boos라는 collection을 생성 후 데이터 추가
                                              collection이 있을시 기존 collection에 추가
    * db.collection.drop() : collection 삭제
    
 # document
    * RDBMS에서 한개의 Record와 같은 역할을 한다
    * db.collection.remove({}) : collection 내의 모든 document 삭제
    * db.collection.find({}) : 조회 retrive, read