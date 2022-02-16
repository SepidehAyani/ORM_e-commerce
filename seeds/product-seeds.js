const { Product } = require('../models');

const productData = [
  {
    product_name: 'iPhone 13',
    price: 799.00,
    stock: 25,
    category_id: 1,
  },
  {
    product_name: 'MacBook',
    price: 1500.00,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: 'Sonos',
    price: 559.00,
    stock: 34,
    category_id: 3,
  },
  {
    product_name: 'Bose',
    price: 854.00,
    stock: 17,
    category_id: 4,
  },
  {
    product_name: 'iPad',
    price: 309.00,
    stock: 22,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;