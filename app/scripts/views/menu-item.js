import $ from 'jquery';

function renderItem(menuItem, order) {
  const item = $(`
    <li>
      <h3>${menuItem.get('item')}</h3>
      <span class="dollar-amount">${(menuItem.get('price')).toFixed(2)}</span>
      <p>${menuItem.get('description')}</p>
    </li>
    `);

  item.on('click', (e) => {
    order.addItem(menuItem.get('item'));
    order.addPrice(menuItem.get('price'));
  });

  return item;
}

export default renderItem;
