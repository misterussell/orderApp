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
  let orderTotal = $(`
    <h3>
    </h3>
    `);
  let tax = $(`
    <h4>
    </h4>
    `);

  let items = order.get('items');
  let prices = order.get('total');
  // console.log(prices);

  let combos = _.zip(items, prices);
  // console.log(combos);

  combos.forEach(function(item, i, arr){
    renderOrderItem(item);
  });

  // order.get('items').on('change', () => {
  //   order.get('items').forEach(function(item, i, arr){
  //     console.log(item);
  //     // cart.append(renderOrderItem(item));
  //   });
  // });

  //Fully loaded parent to append
  orderContainer.append(orderTitle, cart, orderTotal);

  return orderContainer;
}

export default renderOrder;
