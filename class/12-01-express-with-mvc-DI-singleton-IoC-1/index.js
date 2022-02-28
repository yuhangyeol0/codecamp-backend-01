import express from 'express'
import { ProductController } from './mvc/controllers/product.controller.js'
import {CouponController} from './mvc/controllers/coupon.controller.js'
import { ProductService } from './mvc/controllers/services/product.service.js'
import { CashService } from './mvc/controllers/services/cash.service.js'
import { PointService } from './mvc/controllers/services/point.service.js'

const app = express()
//여기 부분은 nest js가 해줌
const productService = new ProductService()
const moneyService1 = new CashService() //new 한번으로 모든 곳에서 사용 가능 (싱글톤패턴)
const moneyService2 = new PointService() // 포인트결제 추가

//상품 API
const productController = new ProductController(moneyService1, productService)
app.post('/products/buy',productController.buyProduct)
app.post('/products/refund', productController.refundProduct)

//쿠폰 API
const couponController = new CouponController(moneyService2)
app.post('/coupons/buy', couponController.buyCoupon)


app.listen(3000)