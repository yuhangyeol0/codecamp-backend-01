import {checkValidationEmail, getWelcomeTemplete, getOpenGraph, sendTempleteToEmail} from './services/email.js';
import { User } from '../models/user.model.js';
import { Phone } from '../models/token.model.js';

export class UsersController{
    getUser = async (req, res) => {
        const userBoard = await User.find()
        res.send(userBoard)
      }

    postUser = async (req, res) => {
        const isValid = checkValidationEmail(req.body.email)
          if(isValid){
            const tokenPhone = await Phone.findOne({phone: req.body.myphone})
            await Phone.updateOne({phone:req.body.myphone},{isAuth:true})
            res.send(true)
              
            // const err = sendError(req.body.myphone)
      
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
    }
}
