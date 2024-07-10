import styled from 'styled-components';

const SectionLayout = styled.section`
  width: 100%;
  border: 1px solid red;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .BtnRow {
    display: flex;
    gap: 10px;
  }
`;

export { SectionLayout, LayoutContainer };
