import express from 'express'
import swaggerUi from 'swagger-ui-express'
import mongoose from 'mongoose'
import {checkValidationPhone, getToken, sendTokenToSMS} from './controllers/services/phone.js'
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors'
import dotenv from 'dotenv'
import {Starbucks} from './models/starbucks.model.js'
import {Phone} from './models/token.model.js'
import { UsersController } from './controllers/users.controller.js';

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));



mongoose.connect('mongodb://my_database:27017/codecamp')



//회원가입
const userscontroller = new UsersController()
app.post('/user/signup', userscontroller.postUser)


//회원목록조회
app.get('/user/list',userscontroller.getUser)

//토큰인증
app.post('/tokens/phone',async function(req, res){
  const myphone = req.body.myphone
  const isValid = checkValidationPhone(myphone)
  if(!isValid){
    return
  } 
  
  const prevToken = await Phone.findOne({phone:myphone})
  console.log(prevToken)
  const mytoken = getToken(4)   
  sendTokenToSMS(myphone,mytoken)
  if(prevToken){
      prevToken.token = mytoken
      await prevToken.save()
      res.send(mytoken+'인증번호를 전송했습니다')
      return
    }
  const phone = new Phone({
    token:mytoken, 
    phone:myphone, 
    isAuth:false
  })
  await phone.save()
})

//인증완료
app.patch('/tokens/phone',async function(req, res){
  const tokenPhone = await Phone.findOne({phone: req.body.myphone})
  console.log(tokenPhone)

  if(!tokenPhone){
    res.send(false)
    return
  }

  if(tokenPhone.token !== req.body.token){
    res.send(false)
    return
  }
  await Phone.updateOne({phone:req.body.myphone},{isAuth:true})
  res.send(true)
  return
})



//스타벅스커피목록조회
app.get('/starbucks', async function (req, res) {
  const menu = await Starbucks.find()
  res.send(menu)
})



app.listen(3000)