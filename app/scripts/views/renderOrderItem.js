import $ from 'jquery';

function renderOrderItem(item) {
  const singleItem = $(`
    <li>
      <span class="name">${item[0]}</span>
      <span class="dollar-amount">${item[1]}</span>
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
