const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Phones',
  },
  {
    category_name: 'Laptops',
  },
  {
    category_name: 'Speakers',
  },
  {
    category_name: 'Headphones',
  },
  {
    category_name: 'Tablets',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;