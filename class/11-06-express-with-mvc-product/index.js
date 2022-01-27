import express from 'express'
import { ProductController } from './model/product.controller.js'

const app = express()




//상품 API
const productController = new ProductController()
app.post('/products/buy',productController.buyProduct)
app.post('/products/refund', productController.refundProduct)

//쿠폰 API

app.listen(3000)