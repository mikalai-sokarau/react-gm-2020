import ISortValue from '@app/components/preferenceBar/preferenceBar.interface';

export const preferenceList = [
  'all',
  'documentary',
  'comedy',
  'horror',
  'crime',
];

export const sortValues: Array<ISortValue> = [
  {
    value: 'release date',
    label: 'release date',
  },
  {
    value: 'name',
    label: 'name',
  },
];
