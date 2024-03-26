const productService = require('../service/product');

async function createProduct(req, res, next) {
  try {
    await productService.createProduct(req.body);
    console.log(5);
    res.send('Ürün başarıyla oluşturuldu'); 
  } catch (error) {
    next(error);
  }
}

async function getProductsByCategory(req, res) {
  try {
    const { category } = req.params;
    const products = await productService.getProductsByCategory(category);
    res.send(products);
    console.log('products :>> ', products);
    if (products.length === 0) {
      return res.status(404).json({ message: 'item was not found' });
    }
    //res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'error' });
  }
}

async function findOne(req, res) {
  const { id } = req.params;

  const foundProduct = await productService.findProduct(id);

  res.send(foundProduct);
}

async function deleteProductById(req, res){
  const { id } = req.params;
  const deletedProduct = await productService.deleteProductById(id);
  res.send(deletedProduct);
}

module.exports = {
  createProduct,
  findOne,
  getProductsByCategory,
  deleteProductById
};
