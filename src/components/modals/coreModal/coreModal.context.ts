import React from 'react';
import { ModalType } from '@app/components/modals/coreModal/coreModal.interface';

export interface IModalContext {
  actionType?: ModalType;
  movieId?: number;
  type?: ModalType;
}

export const ModalContext = React.createContext({
  chosenModal: null as IModalContext,
  setChosenModal: (context: IModalContext) => { },
});
