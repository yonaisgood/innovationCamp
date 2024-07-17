import useModalStore from '@/module/store';
import Modal from '../common/modal/Modal';
import Button from '../common/button/Button';
import * as Styled from './CommonLayout';

export default function ModalSet() {
  const { openModal } = useModalStore();

  return (
    <Styled.SectionLayout>
      <h2>Modal</h2>

      <div className="BtnRow">
        <Button
          size="small"
          onClick={() =>
            openModal(
              'test',
              [
                {
                  label: 'Cancel',
                  size: 'medium',
                  color: 'negative',
                  onClick: () => useModalStore.getState().closeModal(),
                },
                {
                  label: 'Confirm',
                  size: 'medium',
                  onClick: () => useModalStore.getState().closeModal(),
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
            openModal(
              'test2',
              [
                {
                  label: 'x',
                  size: 'circle',
                  color: 'gray',
                  borderRadius: 'circleBtn',
                  onClick: () => useModalStore.getState().closeModal(),
                },
              ],
              'top',
            )
          }
        >
          open large modal
        </Button>
      </div>
      <Modal />
    </Styled.SectionLayout>
  );
}
