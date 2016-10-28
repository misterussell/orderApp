import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    time: new Date(),
    items: [],
    total: [],
    tax: 0
  },
  idAttribute: '_id',
  calculateTotal(addition) {
    let runningTotal = this.get('total');
    let newTotal = runningTotal.concat(addition);
    this.set({total: newTotal});
    // console.log(this.get('total'));
  },
  calculateTax() {

  },
  addItem(addition) {
    let cart = this.get('items');
    let updatedCart = cart.concat(addition);
    this.set({items: updatedCart});
    // console.log(this.get('items'));
  },
  removeItem() {

  },
  url: 'http://tiny-za-server.herokuapp.com/collections/maxorder'
});
