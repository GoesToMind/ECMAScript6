const { title } = require('process');

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    },
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 },
];

const bookShop = createBookShop(inventory);

const inventoryValue = bookShop.inventoryValue();

const priceHarryPotter = bookShop.priceForTitle('Harry Potter');

console.log(inventoryValue);
console.log(priceHarryPotter);
