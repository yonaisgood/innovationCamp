import styled from 'styled-components';

const DetailPageBox = styled.section`
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  border: 2px solid rgb(238, 238, 238);

  Button {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

const DetailPageInfo = styled.div``;

export { DetailPageBox, DetailPageInfo };
