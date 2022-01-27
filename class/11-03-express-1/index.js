import express from 'express'

const app = express()

//상품 구매하기
app.post('/products/buy', (req, res) => {
    res.send('상품을 구매합니다')
})

//상품 환불하기
app.post('/products/refund', (req, res)=> {
    res.send('상품을 환불합니다')
})

app.listen(3000)