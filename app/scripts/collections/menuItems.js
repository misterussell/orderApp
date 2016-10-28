import Backbone from 'backbone';

import Item from '../models/item';

export default Backbone.Collection.extend({
  model: Item,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json'
});
