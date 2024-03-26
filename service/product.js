const productSchema = require('../models/product');

async function createProduct(productBody) {
  // productBody.price = productBody.price * 10;
  const createdProduct = new productSchema(productBody);
  await createdProduct.save();
  console.log(5);
  return createdProduct;
}

function findProduct(id) {
  return productSchema.findById(id);
}

// function getProductsByCategory(category) {
//   const wantedItems = productSchema.find({category: category})
//   console.log(wantedItems)
//   return wantedItems;
// }

async function getProductsByCategory(givenCategory){
  console.log('givenCategory :>> ', givenCategory);
  return await productSchema.find({category: givenCategory});
}

async function deleteProductById(id) {
  return await productSchema.findByIdAndDelete(id);
}

module.exports = {
  createProduct,
  findProduct,
  getProductsByCategory,
  deleteProductById
};
