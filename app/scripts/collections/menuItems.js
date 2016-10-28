import Backbone from 'backbone';
import _ from 'underscore';

import Item from '../models/test';

export default Backbone.Collection.extend({
  mode: Item,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
  parse: function(response) {
    console.log(response);
    // let test = _.mapObject({response}, function(val, key){
    //   console.log(Object.keys(response));
    //   return Object.keys(response);
    // });
    return response;
  }

});

//restructure this data model for what an order is.
