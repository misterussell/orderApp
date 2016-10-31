//Node Modules
import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

//Render Modules
import renderMenu from './views/menu';
import renderOrder from './views/order';
import renderOrderConfirm from './views/orderConfirmation';

//Collection Generators
import Beers from './collections/beers';
import Foods from './collections/foods';
import Games from './collections/games';
import orders from './collections/orders';

//Order Generator
import OrderItem from './models/orderItem';

//Containers
const menuContainer = $('.menu-container');
const orderContainer = $('.order-container');
const confirmContainer = $('.confirm');

//Data Structuring
let data = [];
let beerData = new Beers();
let foodData = new Foods();
let gameData = new Games();
let Orders = new orders();

//Array Loaded to DRY the menu creation
data.push(beerData, foodData, gameData);

let orderTransfer;

const Router = Backbone.Router.extend({
  routes: {
    ""             : "order",
    "orderConfirm" : "orderConfirmation"
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
      orderTransfer = currentOrder;
    });
  },
  orderConfirmation() {
    Orders.fetch();
    console.log('hello father');
    menuContainer.empty();
    orderContainer.hide();
    menuContainer.hide();
    confirmContainer.append(renderOrderConfirm(orderTransfer));
  }
});

var router = new Router();

export default router;
