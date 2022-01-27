// const express = require('express')
import express from 'express'
import {checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors'

const app = express()

app.use(express.json()) //실제로 연결시켜줌 잊지말기 ~~~s

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.use(cors())//실무에서는 우리 사이트만 {origin}으로 허용하도록 사용.

app.get('/boards', function (req, res) {
  //데이터 조회하는 로직(from DB)
// res.send('조회에 성공하였습니다.')
  res.send([{number:1, writer:'한결', title:'제목', contents:"내용"},
            {number:2, writer:'겨르', title:'제목1', contents:"내용11"},
            {number:3, writer:'유한결', title:'제목2', contents:"내용22"}])
})



app.post('/boards', function (req, res) {
  //데이터를 등록하는 로직(at DB)
  // console.log(req)
  console.log(req.body)
  res.send('등록에 성공하였습니다.')
})


app.post('/tokens/phone',function(req, res){
  //폰인증api
  const myphone = req.body.myphone
  const isValid = checkValidationPhone(myphone)//또는 인자를 그냥 req.body.myphone으로 해도 됨
  if(isValid){
    const mytoken = getToken(4)         
    sendTokenToSMS(myphone,mytoken)
  }
  res.send('전송이 완료되었습니다.')    
})


app.listen(3001)