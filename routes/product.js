const express = require('express');
const router = express.Router();

const { deleteProductById, createProduct, findOne, getProductsByCategory } = require('../controller/product');

// router.get('/', (req, res) =>
//  res.send('bodydeki filtreye göre fiyatları döndük.')
// );

router.get('/:id', (req, res) => findOne(req, res)); //id ye göre getir

router.post('/:category', (req, res) => getProductsByCategory(req, res)); //category ye göre getir
router.post('/', (req, res, next) => createProduct(req, res, next));  //product oluştur

router.patch('/:id', (req, res) =>                                  
  res.send(`${req.params.id} id ye göre güncelle`)          //id ye göre güncelle
);
  
router.delete('/:id', (req, res) => deleteProductById(req, res));  //id ye göre sil

module.exports = router;
