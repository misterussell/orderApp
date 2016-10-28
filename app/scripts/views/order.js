import $ from 'jquery';

import renderOrderItem from './orderitem';

function renderOrder(orderData) {
  let runningTotal = 0;
  const orderBox = $(`<div></div>`);
  const orderTitle = $(`
    <h2>Your Order</h2>
    `);
  const order = $(`
    <ul>
    </ul>
    `);
  orderData.forEach((item, i, arr) => {
    order.append(renderOrderItem(item));
    runningTotal += item.get('price');
    // console.log(runningTotal);
  });
  let orderTotal = $(`
    <h3>
      ${runningTotal}
    </h3>
    `);
  //Fully loaded parent to append
  orderBox.append(orderTitle, order, orderTotal);
  return orderBox;
}

export default renderOrder;
