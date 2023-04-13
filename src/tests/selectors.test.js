import { selectCart } from '../redux/cart/slice';

describe('redux selectors', () => {
  it('should selectcard from state object', () => {
    const items = [
      {
        title: 'мыло',
        price: 45,
        imageUrl: 'url',
        size: '45',
        count: 2,
        itemCount: 1,
        code: 1241352,
        id: '5',
        description: 'description',
      },
    ];
    const totalPrice = 45;

    const result = selectCart({ items, totalPrice });
    expect(result).toEqual(items, totalPrice);
  });
});
