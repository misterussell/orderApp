import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    time: new Date(),
    items: [],
    total: 0,
    prices: [],
    //Tax not currently being used
    tax: 0
  },
  idAttribute: '_id',
  calculateTotal(addition) {
    // let runningTotal = this.get('total') + calculateTax(this.get('total'));
    let runningTotal = this.get('total');
    let addItem = runningTotal + addition;
    this.set({total: addItem});
  },
  addPrice(addition) {
    let allPrices = this.get('prices');
    let newList = allPrices.concat(addition);
    this.set({prices: newList});
  },
  calculateTax() {
    let currentOrder = this.get('total');
    let orderTax = currentOrder * 0.08;
    return orderTax;
  },
  addItem(addition) {
    let cart = this.get('items');
    let updatedCart = cart.concat(addition);
    this.set({items: updatedCart});
  },
  removeItem() {

  },
  url: 'http://tiny-za-server.herokuapp.com/collections/maxorder'
});
