export enum ButtonType {
  add = 'add',
  reset = 'reset',
  search = 'search',
  submit = 'submit',
}

export const BUTTON_TEXT = {
  add: '+ add movie',
  reset: ButtonType.reset,
  search: ButtonType.search,
  submit: ButtonType.submit,
};

export interface IButton {
  type: ButtonType,
  onButtonClick: () => void,
}
