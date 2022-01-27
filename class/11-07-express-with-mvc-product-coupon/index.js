import express from 'express'
import { ProductController } from './mvc/controllers/product.controller.js'
import {CouponController} from './mvc/controllers/coupon.controller.js'

const app = express()

//상품 API
const productController = new ProductController()
app.post('/products/buy',productController.buyProduct)
app.post('/products/refund', productController.refundProduct)

//쿠폰 API
const couponController = new CouponController
app.post('coupon/buy', couponController.buyProduct)


app.listen(3000)