import $ from 'jquery';

import renderItem from './menu-item';

// function renderMenu(beers, foods, games) {
function renderMenu(menuData, orderData) {
  const menu = $(`
    <ul>
    <h1>
      Menu
    </h1>
    </ul>
    `);
  const menuCourses = ['Beer', 'Mains', 'Games'];
     menuData.forEach(function(course, i, arr) {
      course.on('update', () => {
        //Load Course Titles
        menu.append(`<h2 class="Course-Title">${menuCourses[i]}</h2>`);
        course.forEach(function(item, i, arr){
         menu.append(renderItem(item, orderData));
        });
      });
     });
    return menu;
}

export default renderMenu;
