import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'
import {checkValidationEmail, getWelcomeTemplete, sendTempleteToEmail} from './email.js';
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
//import {Board} from './models/board.model.js'
import { Stock } from './models/stock.model.js';


dotenv.config()

const app = express()

app.use(express.json()) //실제로 연결시켜줌 잊지말기 ~~~s

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));


app.get('/boards', function (req, res) {
  //데이터 조회하는 로직(from DB)
// res.send('조회에 성공하였습니다.')
  res.send([{number:1, writer:'한결', title:'제목', contents:"내용"},
            {number:2, writer:'겨르', title:'제목1', contents:"내용11"},
            {number:3, writer:'유한결', title:'제목2', contents:"내용22"}])
})


/***************/
app.post('/boards', async function (req, res) {
  //데이터를 등록하는 로직(at DB)
  // console.log(req)

  const myaddress = req.body.mycontents.split(" ").filter((el)=>el.includes("http"))
  console.log(req.body)
  console.log('1dddssss11')

  const board = new Board({
                            writer:req.body.mywriter,
                            title:req.body.title,
                            contents:req.body.mycontents,
                            // pretitle:
                            // precontents:
                            // preimage:
                            // preurl:
                          })
  await board.save()//디비에 저장됨


  res.send('등sssss')
})


app.post('/tokens/phone',function(req, res){
  console.log(req, "req");
  //폰인증api
  const myphone = req.body.myphone
  const isValid = checkValidationPhone(myphone)//또는 인자를 그냥 req.body.myphone으로 해도 됨
  if(isValid){
    const mytoken = getToken(4)         
    sendTokenToSMS(myphone,mytoken)
  }
  res.send('전송이 완료되었습니다.')    
})


app.post('/users', function(req, res){
  //02-06의 api
  const user = req.body.user
  const isValid = checkValidationEmail(user.email)
    if(isValid){

        const mytemplete = getWelcomeTemplete(user)

    sendTempleteToEmail(user.email, mytemplete)
    }
})


app.get('/stocks',async function(req, res){
  const stocks = await Stock.find()
  res.send(stocks)
})


//몽고DB에 접속
mongoose.connect('mongodb://my_database:27017/codecamp')
//express 서버 오픈(리슨)
app.listen(3001)