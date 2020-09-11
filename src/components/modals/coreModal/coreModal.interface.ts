export enum ModalType {
  Add = 'add',
  Delete = 'delete',
  Edit = 'edit',
}

export interface IModal {
  onConfirmClick: () => void;
  onCancelClick: () => void;
}
