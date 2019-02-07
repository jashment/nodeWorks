const path = require('path')

const express = require('express')

const adminController = require('../controllers/admin')

const rootDir = require('../utilities/path')

const router = express.Router()

router.get('/add-product', adminController.getAddProduct)

router.post('/add-product', adminController.getEditProduct)

exports.routes = router
exports.products = products