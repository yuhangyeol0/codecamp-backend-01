// const express = require('express')
import express from 'express'
const app = express()

app.use(express.json()) //실제로 연결시켜줌 잊지말기 ~~~

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

app.listen(3001)