import ISortValue from '@app/components/preferenceBar/preferenceBar.interface';

export interface IDropdown {
  title: string;
  options: Array<ISortValue>;
  callback: (chosenOption: ISortValue) => void;
}
