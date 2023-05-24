const { Router } = require('express')
const { brandController } = require('../controllers/brand.controller')

const router = Router();

router.get('/brand', brandController.getBrand)
router.post('/brand', brandController.createBrand)
router.delete('/brand/:id', brandController.deleteBrand)

module.exports = router
