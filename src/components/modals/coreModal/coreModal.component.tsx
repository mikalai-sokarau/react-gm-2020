import React, { FC, useContext } from 'react';
import ModalContext from '@app/components/modals/coreModal/coreModal.context';
import useStyle from '@app/components/modals/coreModal/coreModal.component.style';

const CoreModal: FC<Record<string, unknown>> = () => {
  const s = useStyle();
  const { chosenModal, setChosenModal } = useContext(ModalContext);

  return (
    <section className={s.modalBackground}>
      <p>
        MODAL TYPE IS:
        {chosenModal.type}
      </p>
      <p>
        MODAL ID IS:
        {chosenModal.movieId}
      </p>
      <div onClick={() => setChosenModal({ type: null })}>
        CLOSE THE MODAL WINDOW
      </div>
    </section>
  );
};

export default CoreModal;
