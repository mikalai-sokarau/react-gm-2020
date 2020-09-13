import { IModalContext } from '@app/components/modals/coreModal/coreModal.context';
import { IMovie } from '@app/mockData/movies.model';

export enum ModalType {
  Add = 'add',
  Delete = 'delete',
  Edit = 'edit',
  Success = 'success',
}

export interface IModal {
  onConfirmClick: (movie?: IMovie) => void;
  onCancelClick: () => void;
  modalDetails?: IModalContext;
}
