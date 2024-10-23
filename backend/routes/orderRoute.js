import express from 'express'
import { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus, verifyStripe , verifyRazorpay } from '../controllers/orderController.js'
import adminauth from '../middleware/adminauth.js';
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()


//Admin Features
orderRouter.post('/list', adminauth, allOrders)
orderRouter.post('/status', adminauth, updateStatus)

//Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

//User Feature
orderRouter.post('/userorders', authUser, userOrders)

//verify Payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter;