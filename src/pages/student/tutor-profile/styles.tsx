import styled from 'styled-components';

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 48px 0;
  align-items: center;
`;

export const WrapperProfile = styled.div`
  display: flex;
  align-items: center;

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
