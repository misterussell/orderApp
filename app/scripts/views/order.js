import $ from 'jquery';
import _ from 'underscore';

import renderOrderItem from './renderOrderItem';
import Orders from '../collections/orders';

function renderOrder(order) {
  let newOrder = new Orders();
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
  const orderButton = $(`
    <button class="place-order">
      Place Order
    </button>
    `);

  //Calculate new total - generates from scratch, not dynamic
  order.calculateTotal();

  //Merge Individual Items for Visual Purposes
  let items = order.get('items');
  let prices = order.get('prices');

  //Merge Individual Items for Visual Purposes
  let itemsWithPrices = _.zip(items, prices);

  if (order.get('items').length === 0) {
    cart.append(`<li>Cart Empty</li>`);
  } else {
    itemsWithPrices.forEach(function(item, i, arr){
      cart.append(renderOrderItem(item));
    });
  }

  //Fully loaded parent to append
  orderContainer.append(orderTitle, cart, tax, orderTotal, orderButton);

  orderButton.on('click', (e) => {
    e.preventDefault();
    if (order.get('items').length === 0) {
      alert('Please add an item to your cart to proceed with order.');
    } else {
      console.log('Order placed.');
      newOrder.create(
        {order},
        { success: () => {
          alert('Order has been placed. Thanks!');
          }
        }
      );
    }
  });

  return orderContainer;
}

export default renderOrder;
