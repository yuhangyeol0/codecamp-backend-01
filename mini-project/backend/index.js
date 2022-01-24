import express from 'express'
import swaggerUi from 'swagger-ui-express'
import mongoose from 'mongoose'
import {checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'
import {checkValidationEmail, getWelcomeTemplete, getOpenGraph, sendTempleteToEmail} from './email.js';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors'
import dotenv from 'dotenv'
import axios from 'axios'
import {User} from './models/user.model.js'
import {Starbucks} from './models/starbucks.model.js'
import {Phone} from './models/token.model.js'

//import puppeteer from 'puppeteer'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));




mongoose.connect('mongodb://my_database:27017/codecamp')

//회원가입
app.post('/user', async function(req, res){
  const isValid = checkValidationEmail(req.body.email)

      if(isValid){
        const tokenPhone = await Phone.findOne({phone: req.body.myphone})
        await Phone.updateOne({phone:req.body.myphone},{isAuth:true})
        res.send(true)

        const pers=req.body.personal.substr(0,7).padEnd(14,'*')
        const obj = await getOpenGraph(req.body.prefer)
        console.log(obj)
        const myuser = new User({
          name: req.body.name,
          email: req.body.email,
          personal: pers,
          prefer: req.body.prefer,
          pwd: req.body.pwd,
          phone: req.body.myphone,
          og:obj
        })
        await myuser.save() 
        // res.send(myuser)

        const mytemplete = getWelcomeTemplete(myuser)
        sendTempleteToEmail(req.body.email, mytemplete)
        console.log(myuser._id)
      }
      return
})


//회원목록조회
app.get('/users', async function (req, res) {
  const userBoard = await User.find()
  res.send(userBoard)
})

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




app.listen(3001)