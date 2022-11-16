import styled from 'styled-components';

export const WrapperProfile = styled.div`
  display: flex;
  align-items: center;
  margin: 48px 0;
  & > h5 {
    margin: 0 0 0 15px;
  }
`;

export const Navigation = styled.nav`
  & > button {
    margin-right: 15px;
    min-width: 200px;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  column-gap: 30px;
  row-gap: 30px;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  margin-bottom: 70px;
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    width: 48%;
  }
`;
