const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'on sale',
  },
  {
    tag_name: 'new',
  },
  {
    tag_name: 'used',
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;