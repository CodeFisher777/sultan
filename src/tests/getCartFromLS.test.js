import { getCartFromLS } from '../utils/getCartFromLS';

describe('getCartFromLs', () => {
  test('getCart with empty items and totalPrice=0', () => {
    const items = [
      {
        id: '1',
        title: 'string',
        price: 20,
        imageUrl: 'string',
        size: 47,
        count: 3,
        itemCount: 2,
        description: 'description',
      },
      {
        id: '1',
        title: 'string',
        price: 40,
        imageUrl: 'string',
        size: 47,
        count: 1,
        itemCount: 2,
        description: 'description',
      },
    ];
    const totalPrice = 500;
    expect(getCartFromLS()).toEqual({ items: [], totalPrice: 0 });
  });
});
