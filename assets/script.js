//calorie intake storage 
const storageItem = (function () {
    // public methods
    return {
      storeItem: function (item) {
        let items;
        //check if any items in local storage
        if (localStorage.getItem("items") === null) {
          items = [];
          //push new items
          items.push(item);
          //set local storage
          localStorage.setItem("items", JSON.stringify(items));
        } else {
          items = JSON.parse(localStorage.getItem("items"));
          items.push(item);
          localStorage.setItem("items", JSON.stringify(items));
        }
      }}})