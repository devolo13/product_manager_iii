const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
  response.json({
    message: 'Hello World',
  });
};

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.getAllProducts = (request, response) => {
  Product.find({})
    .then((products) => response.json(products))
    .catch((err) => response.json(err));
};

module.exports.getProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.deleteOneProduct = (request, response) => {
  Product.deleteOne({_id: request.params.id})
  .then((result) => response.json({result: result}))
  .catch((err) => response.json(err));
};

module.exports.updateOneProduct = (request, response) => {
  Product.findOneAndUpdate({ _id: request.params.id }, request.body)
    .then((updatedProduct) => {
      response.json(updatedProduct);
    })
    .catch((err) => {
      response.json(err);
    });
}