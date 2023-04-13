export enum SortPropertyEnum {
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}
export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  categoryId: string;
  currentPage: number;
  sort: Sort;
  minPrice: number;
  maxPrice: number;
  brand: string[];
}
