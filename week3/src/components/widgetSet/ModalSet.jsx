import Modal from '../common/modal/Modal';
import Button from '../common/button/Button';
import * as Styled from './CommonLayout';
import { useRef, useState } from 'react';

export default function ModalSet() {
  const dialogRef = useRef();
  const [modalContent, setModalContent] = useState({
    content: '',
    buttons: [],
    buttonPosition: 'bottom',
  });

  const openDialog = (content, buttons, buttonPosition = 'bottom') => {
    setModalContent({ content, buttons, buttonPosition });

    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <Styled.SectionLayout>
      <h2>Modal</h2>

      <div className="BtnRow">
        <Button
          size="small"
          onClick={() =>
            openDialog(
              'This is a large modal content.',
              [
                {
                  label: 'Cancel',
                  size: 'medium',
                  color: 'negative',
                  onClick: closeDialog,
                },
                {
                  label: 'Confirm',
                  size: 'medium',
                  onClick: closeDialog,
                },
              ],
              'bottom',
            )
          }
        >
          open small modal
        </Button>

        <Button
          size="large"
          border="true"
          color="negative"
          onClick={() =>
            openDialog(
              'This is a small modal content.',
              [
                {
                  label: 'x',
                  size: 'circle',
                  color: 'gray',
                  borderRadius: 'circleBtn',
                  onClick: closeDialog,
                },
              ],
              'top',
            )
          }
        >
          open large modal
        </Button>
      </div>
      <Modal
        dialogRef={dialogRef}
        closeDialog={closeDialog}
        content={modalContent.content}
        buttons={modalContent.buttons}
        buttonPosition={modalContent.buttonPosition}
      />
    </Styled.SectionLayout>
  );
}
