import { calcTotalPrice } from '../utils/calcTotalPrice';

describe('валидация значения', () => {
  test('корректное значение', () => {
    expect(
      calcTotalPrice([
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
      ]),
    ).toBe(100);
  });
});
