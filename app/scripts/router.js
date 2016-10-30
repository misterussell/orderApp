//Node Modules
import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

//Render Modules
import renderMenu from './views/menu';
import renderOrder from './views/order';

//Collection Generators
import Beers from './collections/beers';
import Foods from './collections/foods';
import Games from './collections/games';

//Order Generator
import OrderItem from './models/orderItem';

//Containers
const menuContainer = $('.menu-container');
const orderContainer = $('.order-container');

//Data Structuring
let data = [];
let beerData = new Beers();
let foodData = new Foods();
let gameData = new Games();
// let allOrders = new Orders();
// let currentOrder = new OrderItem();

//Array Loaded to DRY the menu creation
data.push(beerData, foodData, gameData);

const Router = Backbone.Router.extend({
  routes: {
    ""             : "home",
    "order"       :  "order",
    "orderConfirm" : "orderConfirmation"
  },
  home() {
    console.log('hello');
    menuContainer.empty();
  },
  order() {
    let currentOrder = new OrderItem();
    beerData.fetch();
    foodData.fetch();
    gameData.fetch();
    orderContainer.empty();
    orderContainer.show();
    console.log('mother');
    menuContainer.append(renderMenu(data, currentOrder));
    orderContainer.append(renderOrder(currentOrder));
    currentOrder.on('change', () => {
      orderContainer.empty();
      currentOrder.calculateTax();
      currentOrder.calculateTotal();
      orderContainer.append(renderOrder(currentOrder));
    });
  },
  orderConfirmation() {
    console.log('hello father');
    menuContainer.empty();
    orderContainer.hide();
  }
});

var router = new Router();

export default router;
