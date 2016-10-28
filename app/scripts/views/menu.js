import $ from 'jquery';

import renderItem from './menu-item';

function renderMenu(beers, foods, games) {
  const menu = $(`
    <ul>
    </ul>
    `);
    let test = beers.models;
    console.log(beers.get(24));
    test.forEach((data, i, arr) => {
      console.log(1);
    });
    console.log(foods);
    console.log(games);
    return menu;
}

export default renderMenu;
