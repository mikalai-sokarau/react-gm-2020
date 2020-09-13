import React, { FC, useContext } from 'react';
import { ModalType } from '@app/components/modals/coreModal/coreModal.interface';
import { ModalContext } from '@app/components/modals/coreModal/coreModal.context';
import { useStyle } from '@app/components/modals/coreModal/coreModal.component.style';
import SuccessModal from '@app/components/modals/successModal/successModal.component';
import DeleteModal from '@app/components/modals/deleteMovieModal/deleteMovieModal.component';
import MovieDetailsModal from '@app/components/modals/movieDetailsModal/movieDetailsModal.component';

const CoreModal: FC<Record<string, unknown>> = () => {
  const s = useStyle();
  const { chosenModal, setChosenModal } = useContext(ModalContext);
  let modal: JSX.Element;

  switch (chosenModal.type) {
    case ModalType.Delete:
      modal = (
        <DeleteModal
          onConfirmClick={() => setChosenModal({
            actionType: ModalType.Delete,
            movie: chosenModal.movie,
            type: null,
          })}
          onCancelClick={() => setChosenModal({ type: null })}
        />
      );
      break;
    case ModalType.Success:
      modal = (
        <SuccessModal
          onCancelClick={() => setChosenModal({ type: null })}
        />
      );
      break;
    default:
      modal = (
        <MovieDetailsModal
          onConfirmClick={(movie) => setChosenModal({
            movie,
            type: chosenModal.type === ModalType.Add ? ModalType.Success : null,
            actionType: chosenModal.type,
          })}
          onCancelClick={() => setChosenModal({ type: null })}
          modalDetails={chosenModal}
        />
      );
      break;
  }

  return (
    <section className={s.modalBackground}>{modal}</section>
  );
};

export default CoreModal;
