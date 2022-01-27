import express from 'express'
import mongoose from 'mongoose'
import {Phone} from './models/token.model.js'
import {checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())

app.post('/tokens/phone',async function(req, res){
    const myphone = req.body.myphone
    const isValid = checkValidationPhone(myphone)

    const mytoken = getToken(4)        

    if(isValid){
      sendTokenToSMS(myphone,mytoken)
    }    
    const prevToken = await Phone.findOne({phone:myphone})

    if(prevToken){
      prevToken.token=token
      await prevToken.save()
      res.send(token+'인증번호를 전송했습니다')
      return
    }

    const phone = new Phone({
      token:mytoken, 
      phone:myphone, 
      isAuth:false
    })

    await phone.save()

    res.send('전송이 완료되었습니다.')    
    return
})

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

mongoose.connect('mongodb://my_database:27017/codecamp')

app.listen(3001)