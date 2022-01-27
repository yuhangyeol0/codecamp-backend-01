import express from 'express'
import swaggerUi from 'swagger-ui-express'
import {checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'
import {checkValidationEmail, getWelcomeTemplete, sendTempleteToEmail} from './email.js';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));



app.get('/users', function (req, res) {
  res.send([{email :"aaa@gmail.com", name :'한결1', phone :'01011111111', personal :"111111-1111111", prefer :"https://"},
            {email :"bbb@gmail.com", name :'한결2', phone :'01022222222', personal :"222222-2222222", prefer :"https://"},
            {email :"ccc@gmail.com", name :'한결3', phone :'01033333333', personal :"333333-3333333", prefer :"https://"},
            {email :"ddd@gmail.com", name :'한결4', phone :'01044444444', personal :"444444-4444444", prefer :"https://"},
            {email :"eee@gmail.com", name :'한결5', phone :'01055555555', personal :"555555-5555555", prefer :"https://"}
  ])
})

app.get('/starbucks', function (req, res) {
  res.send([{'name', 'img'}])
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


app.listen(3000)