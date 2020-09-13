import React, { FC, useContext } from 'react';
import { ModalType } from '@app/components/modals/coreModal/coreModal.interface';
import { useStyle } from '@app/components/modals/coreModal/coreModal.component.style';
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
              movie: chosenModal.movie,
              type: null,
            })}
            onCancelClick={() => setChosenModal({ type: null })}
          />
        )
        : (
          <MovieDetailsModal
            onConfirmClick={(movie) => setChosenModal({
              movie,
              type: ModalType.Success,
              actionType: chosenModal.type,
            })}
            onCancelClick={() => setChosenModal({ type: null })}
            modalDetails={chosenModal}
          />
        )}
    </section>
  );
};

export default CoreModal;
