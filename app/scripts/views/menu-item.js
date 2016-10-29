import $ from 'jquery';

function renderItem(menuItem, order) {
  const item = $(`
    <li>
      <h2>${menuItem.get('item')}</h2>
      <span class="price">${menuItem.get('price')}</span>
      <p>${menuItem.get('description')}</p>
    </li>
    `);

  item.on('click', (e) => {
    order.addItem(menuItem.get('item'));
    order.addPrice(menuItem.get('price'));
    order.calculateTotal(menuItem.get('price'));
    console.log('Item Ordered');
  });

  return item;
}

export default renderItem;
