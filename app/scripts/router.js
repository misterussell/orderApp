import $ from 'jquery';
import Backbone from 'backbone';

import renderMenu from "./views/menu";

import Beers from './collections/beers';
import Foods from './collections/foods';
import Games from './collections/games';

const menuContainer = $('.menu-container');
const orderContainer = $('.orderContainer');

let beerData = new Beers();
let foodData = new Foods();
let gameData = new Games();

const Router = Backbone.Router.extend({
  routes: {
    ""             : "home",
    "order"       :  "order",
    "orderConfirm" : "orderConfirmation"
  },
  home() {
    console.log('hello');
  },
  order() {
    beerData.fetch();
    foodData.fetch();
    gameData.fetch();

    console.log('mother');
    // console.log(beerData);
    menuContainer.append(renderMenu(beerData, foodData, gameData));
  },
  orderConfirmation() {
    console.log('hello father');
  }
});

var router = new Router();

export default router;
