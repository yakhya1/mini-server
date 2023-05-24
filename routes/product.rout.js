const { Router } = require('express')
const { productController } = require( '../controllers/product.controller')

const router = Router()

router.get('/product', productController.getProduct)
router.get('/product/:id', productController.getProductId)
router.post('/product', productController.createProduct)
router.delete('/product', productController.deleteProduct)

module.exports = router;
