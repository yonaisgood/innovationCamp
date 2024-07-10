import styled from 'styled-components';

const SectionLayout = styled.section`
  width: 100%;

  .BtnRow {
    display: flex;
    gap: 10px;
  }

  .FormBox {
    display: flex;
    gap: 30px;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export { SectionLayout, LayoutContainer };
