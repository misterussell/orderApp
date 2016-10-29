import $ from 'jquery';
import _ from 'underscore';

import renderOrderItem from './renderOrderItem';

function renderOrder(order) {
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
      Tax: ${order.get('tax').toFixed(2)}
    </h4>
    `);
  let orderTotal = $(`
    <h3>
      Order Total: ${order.get('total').toFixed(2)}
    </h3>
    `);

  //Calculate new total - generates from scratch, not dynamically
  order.calculateTotal();

  //Merge Individual Items for Visual Purposes
  let items = order.get('items');
  let prices = order.get('prices');
  //Merge Individual Items for Visual Purposes
  let itemsWithPrices = _.zip(items, prices);

  itemsWithPrices.forEach(function(item, i, arr){
    cart.append(renderOrderItem(item));
  });

  //Fully loaded parent to append
  orderContainer.append(orderTitle, cart, tax, orderTotal);

  return orderContainer;
}

export default renderOrder;
