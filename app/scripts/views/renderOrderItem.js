import $ from 'jquery';
import renderOrder from './order';

const orderContainer = $('.order-container');

function renderOrderItem(item, location, order) {
  const singleItem = $(`
    <li>
      <span class="name">${item[0]}</span>
      <span class="dollar-amount">${item[1]}</span>
      <button class="delete">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </li>
    `);

    singleItem.find('button').on('click', (e) => {
      console.log('this has been removed.');
      order.removeItem(location);
      orderContainer.empty();
      order.calculateTax();
      order.calculateTotal();
      renderOrder(order);
    });

  return singleItem;
}

export default renderOrderItem;
