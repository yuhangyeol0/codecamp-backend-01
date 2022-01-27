import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';

const app = express()
app.use(express.json())

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
  res.send([{name: '아메리카노', kcal:5},
            {name: '헤이즐넛아메리카노', kcal:50},
            {name: '비엔나커피', kcal:105},
            {name: '아인슈페너', kcal:300},
            {name: '라떼', kcal:100},
            {name: '헤이즐넛라떼', kcal:75},
            {name: '바닐라라떼', kcal:55},
            {name: '그린티프라푸치노', kcal:500},
            {name: '자바칩프라푸치노', kcal:555},
            {name: '뱅쇼', kcal:45}
  ])
})

app.listen(3000)