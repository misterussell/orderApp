//Node Modules
import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

//Render Modules
import renderMenu from './views/menu';
import renderOrder from './views/order';
//KEY TESTING
// import renderTestMap from './views/test';

//Collection Generators
import Beers from './collections/beers';
import Foods from './collections/foods';
import Games from './collections/games';
// import Orders from './collections/orders';
import OrderItem from './models/orderItem';
//KEY TESTING
// import MenuItems from './collections/menuItems';

//Containers
const menuContainer = $('.menu-container');
const orderContainer = $('.order-container');

//Data Structuring
let data = [];
let beerData = new Beers();
let foodData = new Foods();
let gameData = new Games();
// let allOrders = new Orders();
let currentOrder = new OrderItem();
//KEY TESTING
// let MenuChoices = new MenuItems();

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
    beerData.fetch();
    foodData.fetch();
    gameData.fetch();
    console.log('mother');
    menuContainer.append(renderMenu(data, currentOrder));
    orderContainer.append(renderOrder(currentOrder));
    currentOrder.on('change', () => {
      orderContainer.empty();
      orderContainer.append(renderOrder(currentOrder));
    });
  },
  orderConfirmation() {
    console.log('hello father');
  }
});

var router = new Router();

export default router;
