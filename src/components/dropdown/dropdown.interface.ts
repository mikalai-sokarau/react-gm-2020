import { ISortValue } from '@app/components/preferenceBar/preferenceBar.interface';

export interface IDropdown {
  title: string;
  options: Array<ISortValue>;
  onSortOptionClick: (chosenOption: ISortValue) => void;
}
