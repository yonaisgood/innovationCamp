import Button from '../button/Button';
import * as Styled from './StyledModal';

export default function Modal({
  dialogRef,
  content,
  buttons = [],
  buttonPosition = 'bottom',
}) {
  return (
    <Styled.DialogModal ref={dialogRef}>
      {buttonPosition === 'top' && (
        <Styled.TopButtonRow>
          <Button
            size={buttons[0].size}
            color={buttons[0].color}
            onClick={buttons[0].onClick}
            borderRadius={buttons[0].borderRadius}
          >
            {buttons[0].label}
          </Button>
        </Styled.TopButtonRow>
      )}

      <Styled.DialogContents>{content}</Styled.DialogContents>

      {buttonPosition === 'bottom' && (
        <Styled.BottomButtonRow>
          {buttons.map((button, index) => (
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
  );
}
