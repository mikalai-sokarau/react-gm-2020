import React from 'react';
import { IMovie } from '@app/mockData/movies.model';
import { ModalType } from '@app/components/modals/coreModal/coreModal.interface';

export interface IModalContext {
  actionType?: ModalType;
  movie?: IMovie;
  type?: ModalType;
}

interface IModalCreateContext {
  chosenModal: IModalContext;
  setChosenModal: (context: IModalContext) => void,
  movie?: IMovie;
}

export const ModalContext = React.createContext<IModalCreateContext>({
  chosenModal: null,
  setChosenModal: null,
  movie: null,
});
