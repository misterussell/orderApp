import Backbone from 'backbone';

import menuItem from '../models/item';

export default Backbone.Collection.extend({
  model: menuItem,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
  // url: '/Beer',
  parse: function(response) {
    return response.Beer;
  }
});
