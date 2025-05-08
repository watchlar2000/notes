interface Fruit {
  name: string;
}

// function Fruit(kind: string) {
//   switch (kind) {
//     case 'apple':
//       return { name: 'Apple', color: 'red' };
//     case 'banana':
//       return { name: 'Banana', color: 'yellow' };
//     default:
//       throw new Error('Unknown fruit');
//   }
// }

class Fruit {
  static createFruit(name: string): Fruit {
    return { name };
  }
}

namespace Fruit {
  function getColor(fruit: { name: string }): string {
    switch (fruit.name) {
      case 'Apple':
        return 'red';
      case 'Banana':
        return 'yellow';
      default:
        throw new Error('Unknown fruit');
    }
  }
}

export { Fruit };
