import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    time: new Date(),
    items: [],
    total: 0,
    tax: 0
  },
  idAttribute: '_id',
  calculateTotal(addition) {
    let runningTotal = this.get('total');
    let newTotal = runningTotal + addition;
    this.set({total: newTotal});
    console.log(this.get('total'));
  },
  calculateTax() {
    
  },
  addItem(addition) {
    let cart = this.get('items');
    console.log(cart);
    let updatedCart = cart.concat(addition);
    this.set({items: updatedCart});
  },
  removeItem() {

  },
  url: 'http://tiny-za-server.herokuapp.com/collections/maxorder'
});
