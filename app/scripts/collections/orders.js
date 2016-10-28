import Backbone from 'backbone';

import orderItem from '../models/orderItem';

export default Backbone.Collection.extend({
  model: orderItem,
  url: 'http://tiny-za-server.herokuapp.com/collections/maxorder',
});

//restructure this data model for what an order is.
//model needs to have a custom function to add in new item orders
//set , update on change event
