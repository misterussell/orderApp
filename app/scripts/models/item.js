import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  rootUrl: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json'
});
