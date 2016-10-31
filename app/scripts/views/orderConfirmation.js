import $ from 'jquery';
import _ from 'underscore';

import renderOrderItem from './orderConfirmationItem';

const confirmContainer = $('.confirm');

function renderOrderConfirm (order) {
  const orderContainer = $(`<div></div>`);
  const orderTitle = $(`
    <h2>Your Order</h2>
    `);
  const cart = $(`
    <ul>
    </ul>
    `);
  let tax = $(`
    <h4>
      Tax: <span class="dollar-amount">${order.get('tax').toFixed(2)}</span>
    </h4>
    `);
  let orderTotal = $(`
    <h3>
      Order Total: <span class="dollar-amount">${order.get('total').toFixed(2)}</span>
    </h3>
    `);

  //Merge Individual Items for Visual Purposes
  let items = order.get('items');
  let prices = order.get('prices');

  //Merge Individual Items for Visual Purposes
  let itemsWithPrices = _.zip(items, prices);

  itemsWithPrices.forEach(function(item, i, arr){
    let location = itemsWithPrices.indexOf(item);
    cart.append(renderOrderItem(item, location, order));
  });

  //Fully loaded parent to append
  confirmContainer.append(orderTitle, cart, tax, orderTotal);

  return;

}

export default renderOrderConfirm;
