// const express = require('express')
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile', function (req, res) {
    res.send('철수')
  })

app.listen(3000)