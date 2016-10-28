import $ from 'jquery';

function renderOrderItem(item) {
  const singleItem = $(`
    <li>
      <span class="name"></span>
      <span class="price"></span>
      <button class="delete">Remove</button>
    </li>
    `);

    console.log(item[0]);
    console.log(item[1]);

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
