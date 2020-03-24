var express = require('express')
var router = express.Router()
var galleryVO = require('../models/galleryVO')

var path = require('path')


// 파일 업로드를 위해
// multer 설정
var multer = require('multer')

// 파일을 어디에 어떻게 업로드할 것인가를 설정하는 객체를 생성
// destination : 어디에 저장할 것인가 실행코드
// filename : upload할 때 원본파일이름 -> uploadfilename으로 변경하는 코드가 있다
//            코드에서 filename을 생성
//             -> filename : 업로드할때 변환된 파일 정보
var saveOptions = multer.diskStorage({
    destination : (req,file,callBackFunc) =>{
        var uploadPath = path.join(__dirname,"/../","public","uploads")
        console.log(uploadPath)
        //Node_Gallery_V1/public/uploads 형식으로 문자열 생성
        callBackFunc(null,uploadPath)
    },
    filename : (req,file,callBackFun)=>{
        // 업로드된 파일이름을 변환하여
        // 해킹에 대비
        var uploadFileName =  Date.now()+"_"+file.originalname
        callBackFun(null,uploadFileName) 
    }
})

// 실제로 파일을 업로드하는 함수 
var saveFile = multer({storage:saveOptions}).single("gOriginalPhotoName")

router.get("/",(req,res)=>{
    galleryVO.find({})
    .exec((err,galleries)=>{
        res.render('index',{galleryList:galleries})
    })
    
})

router.get('/view/:id',(req,res)=>{
    let id = req.params.id
    galleryVO.findOne({_id:id})
    .exec((err,data)=>{
        res.render('gallery/view',{gallery:data})
    })
})

router.get('/update/:id',(req,res)=>{
    let id = req.params.id
    galleryVO.findOne({_id:id})
    .exec((err,data)=>{
        res.render('gallery/upload',{gallery:data})
    })
})

// put method
// RESTfull 방식에서 사용할수 있는 4가지 method
// get, post, put, delete
// 이중 put과 delete => ajax
router.put('/update/:id',(req,res)=>{
    var id = req.params.id
    galleryVO.update({_id:id},{$set:req.body})
    .exec((err,data)=>{
        if(err){
            res.json({
                msg : 'UPDATE FAIL',
                data : data
            })
        }else{
            res.json({
                msg: 'OK',
                data : data
            })
        }
        //res.redirect('/gallery/view/'+id)

    })
})

router.get('/upload',(req,res)=>{
    var gallery = new galleryVO()

    res.render('gallery/upload',{gallery:gallery})
})

/*
 * 파일 업로드하기
   1. multer를 사용해서 생성해둔 saveFile() 함수를 사용해서
      파일 업로드
   2. saveFile() callBack함수내에서 변셩된 파일이름을 추출하고
   3. db 저장 
 */
router.post('/upload',(req,res)=>{
    saveFile(req,res,(err)=>{
        if(err){
            console.log(err)
            res.send('fileUpload 오류')
        }else {
            // 원래 req.file 객체는
            // web form에서 업로드한 파일에 대한 정보만 담겨있다
            // 그중 .originalname은 원본파일
            let originalname = req.file.originalname
            // web form input tag goriginalPhotoName tag가 있었던것처럼
            // 새로운 변수가 추가되고 originalname 값이 세팅
            req.body.gOriginalPhotoName = originalname
            // 원래 tag에 있던 gUploadPhotoName에는
            // 새로 변경된 파일 이름을 저장
            // req.file.filename
            // saveOptions에 설정된 filename: 값이 세팅 
            req.body.gUploadPhotoName = req.file.filename
            var vo = new galleryVO(req.body)
            vo.save((err,data)=>{
                res.redirect('/gallery')
            })
        }
    })
})
module.exports = router