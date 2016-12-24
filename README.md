# Basic Online Order App

- Utilizes MVVM and single use principles to create a dry menu + cart SPA
- Model/Collection/Views/Router were all handled with Backbone
- Halloween themed due to when the project was created
- I used mutative array methods to handle removing content from the cart, rather than recalculating based on the item price and name. I wanted to target the specific location of that item, as I felt it would make more sense for the UI if the user was able to delete the specific item that they clicking (rather than other instances elsewhere in the cart). This could have been handled differently if I had implemented a system that counted similar items together, but the priority was to get a working cart that would update a different view on the same page. 
```
removeItem(location) {
    let itemRemove = this.get('items').splice(location, 1);
    let items = this.get('items');
```

## Planning

- Planning Wireframe: [Wireframe here](https://github.com/misterussell/orderApp/blob/master/order_wireframe.jpg)

## Tools

- [Build Tool](https://github.com/TIY-Austin-Front-End-Engineering/spa-scaffold)
- API of data that was imported into the project. [Pub Item API](https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json)
- Backbone
