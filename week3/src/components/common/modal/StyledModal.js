import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const DialogModal = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 300px;
  min-height: 200px;
  margin: 0;

  border-radius: 12px;
  border: none;
  background: white;
  z-index: 1000;
`;

const DialogContents = styled.p`
  margin: 20px 0;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopButtonRow = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const BottomButtonRow = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;

export {
  Overlay,
  DialogModal,
  DialogContents,
  ButtonRow,
  TopButtonRow,
  BottomButtonRow,
};
