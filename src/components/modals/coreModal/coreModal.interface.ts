import { IModalContext } from '@app/components/modals/coreModal/coreModal.context';

export enum ModalType {
  Add = 'add',
  Delete = 'delete',
  Edit = 'edit',
}

export interface IModal {
  onConfirmClick: () => void;
  onCancelClick: () => void;
  modalDetails?: IModalContext;
}
