import React, { FC, useContext } from 'react';
import { ModalType } from '@app/components/modals/coreModal/coreModal.interface';
import useStyle from '@app/components/modals/coreModal/coreModal.component.style';
import { ModalContext } from '@app/components/modals/coreModal/coreModal.context';
import DeleteModal from '@app/components/modals/deleteMovieModal/deleteMovieModal.component';
import MovieDetailsModal from '@app/components/modals/movieDetailsModal/movieDetailsModal.component';

const CoreModal: FC<Record<string, unknown>> = () => {
  const s = useStyle();
  const { chosenModal, setChosenModal } = useContext(ModalContext);
  const isDeleteModal = chosenModal.type === ModalType.Delete;

  return (
    <section className={s.modalBackground}>
      {isDeleteModal
        ? (
          <DeleteModal
            onConfirmClick={() => setChosenModal({
              actionType: ModalType.Delete,
              movieId: chosenModal.movieId,
              type: null,
            })}
            onCancelClick={() => setChosenModal({ type: null })}
          />
        )
        : (
          <MovieDetailsModal
            onConfirmClick={() => console.log('confirm')}
            onCancelClick={() => setChosenModal({ type: null })}
          />
        )}
    </section>
  );
};

export default CoreModal;
