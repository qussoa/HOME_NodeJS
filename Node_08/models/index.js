const path = require("path")
const Sequelize = require('sequelize')
/*
    현재 작동되는 환경을 development 환경으로 설정하고
    그에 맞는 db정보를 설정하기 위함
    
    const config = require(__dirname + "/../config/config.json")
     --> const env = process.env.NODE_ENV || 'development'[env]
     ex) const c1 = require(configPath)
         const c2 = cq[env]
 */
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname,"..","config","config.json"))[env]

let sequelize = new Sequelize(config.database, config.username, config.password, config)

var database = {}

// db 설정 값이 추가된 seq.. 객체
database.sequelize = sequelize
// Seq 클래스를 static으로 사용하기 위한 설정
database.Sequelize = Sequelize

// seq 객체와 Seq 클래스를 static으로 매개변수로 전달
database.bbsVO = require("./bbsVO")(sequelize,Sequelize)

module.exports = database;

