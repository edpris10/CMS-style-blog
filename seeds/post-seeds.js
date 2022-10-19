const { Post } = require('../models');

const postdata = [
  {
    title: 'Cook with Me.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'SpaceJam.',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'The Sillies.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Los Bandidos.',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
