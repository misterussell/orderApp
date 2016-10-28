import $ from 'jquery';

function renderItem(menuItem) {
  const item = $(`
    <li>
    test
    ${menuItem.get('item')}
    </li>
    `);
  console.log(menuItem.get('item'));
  return item;
}

export default renderItem;
