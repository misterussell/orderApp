import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    time: new Date(),
    items: [],
    total: 0,
    prices: [],
    tax: 0
  },
  idAttribute: '_id',
  calculateTotal() {
    let runningTotal = 0;
    this.get('prices').forEach((price, i, arr) => {
      runningTotal += price;
    });
    let total = runningTotal + this.get('tax');
    this.set({total: total});
    return total;
  },
  addPrice(addition) {
    let allPrices = this.get('prices');
    let newList = allPrices.concat(addition);
    this.set({prices: newList});
  },
  calculateTax(addition) {
    let currentTax = this.get('tax');
    let addTax = currentTax + (addition * 0.08);
    this.set({tax: addTax});
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
