import $ from 'jquery';

function renderOrderItem(item, location, order) {
  const singleItem = $(`
    <li>
      <span class="name">${item[0]}</span>
      <span class="dollar-amount">${item[1]}</span>
    </li>
    `);

  return singleItem;
}

export default renderOrderItem;
