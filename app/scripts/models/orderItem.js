import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    time: new Date(),
    items: [],
    prices: [],
    total: 0,
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
    // let currentTax = this.get('tax');
    // let addTax = currentTax + (addition * 0.08);
    // this.set({tax: addTax});
    let prices = this.get('prices');
    let total = prices.reduce(function(a, b) {
      return a + b;
    }, 0);
    let tax = total * 0.08;
    this.set({tax});
    return tax;
  },
  addItem(addition) {
    let cart = this.get('items');
    let updatedCart = cart.concat(addition);
    this.set({items: updatedCart});
  },
  removeItem(location) {
    let itemRemove = this.get('items').splice(location, 1);
    let items = this.get('items');
    // console.log(items, itemsTest);
    let priceRemove = this.get('prices').splice(location, 1);
    let prices = this.get('prices');
    this.set({items, prices});
  },
  url: 'http://tiny-za-server.herokuapp.com/collections/maxorder'
});
