import React from 'react';
import ModalType from '@app/components/modals/coreModal/coreModal.interface';

interface IModalContext {
  type: ModalType;
  movieId?: number;
}

const ModalContext = React.createContext({
  chosenModal: null as IModalContext,
  setChosenModal: (context: IModalContext) => {},
});

export default ModalContext;
