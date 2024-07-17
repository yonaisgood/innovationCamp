import useModalStore from '@/module/store';
import Button from '../button/Button';
import * as Styled from './StyledModal';

export default function Modal() {
  const { modalContent } = useModalStore((state) => ({
    modalContent: state.modalContent,
  }));

  if (!modalContent.isOpen) return null;

  return (
    <>
      <Styled.Overlay />
      <Styled.DialogModal open={modalContent.isOpen}>
        {modalContent.buttonPosition === 'top' && (
          <Styled.TopButtonRow>
            <Button
              size={modalContent.buttons[0].size}
              color={modalContent.buttons[0].color}
              onClick={modalContent.buttons[0].onClick}
              borderRadius={modalContent.buttons[0].borderRadius}
            >
              {modalContent.buttons[0].label}
            </Button>
          </Styled.TopButtonRow>
        )}

        <Styled.DialogContents>{modalContent.content}</Styled.DialogContents>

        {modalContent.buttonPosition === 'bottom' && (
          <Styled.BottomButtonRow>
            {modalContent.buttons.map((button, index) => (
              <Button
                key={index}
                size={button.size}
                color={button.color}
                onClick={button.onClick}
              >
                {button.label}
              </Button>
            ))}
          </Styled.BottomButtonRow>
        )}
      </Styled.DialogModal>
    </>
  );
}
