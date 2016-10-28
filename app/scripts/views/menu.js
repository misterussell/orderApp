import $ from 'jquery';

import renderItem from './menu-item';

// function renderMenu(beers, foods, games) {
function renderMenu(data, orderData) {
  const menu = $(`
    <ul>
    </ul>
    `);
     data.forEach(function(course, i, arr) {
      //  console.log(course);
       course.on('update', () => {
        course.forEach(function(item, i, arr){
         menu.append(renderItem(item, orderData));
        });
      });
     });
    return menu;
}

export default renderMenu;
