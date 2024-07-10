import styled from 'styled-components';

const DialogModal = styled.dialog`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 200px;
  border: none;
  margin: 0;
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
  DialogModal,
  DialogContents,
  ButtonRow,
  TopButtonRow,
  BottomButtonRow,
};
