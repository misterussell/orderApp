import $ from 'jquery';

function renderOrderItem(item) {
  const singleItem = $(`
    <li>
      <span class="name">${item.get('title')}</span>
      <span class="price">${item.get('price')}</span>
      <button class="delete">Remove</button>
    </li>
    `);

    singleItem.find('button').on('click', (e) => {
      item.destroy({
        success: () => {
          alert('Item removed from cart.');
        }
      });
    });
    
  return singleItem;
}

export default renderOrderItem;
