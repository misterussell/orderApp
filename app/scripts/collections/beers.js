import Backbone from 'backbone';

import menuItem from '../models/item';

export default Backbone.Collection.extend({
  model: menuItem,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
  // url: '/Beer',
  parse: function(response) {
    // Use the object keys to parse through the array
    // rather than the one object
    // Object.keys();
    return response.Beer;
  }
});

//group by
