import styled from 'styled-components';
import { Container as MuiContainer, Avatar as MuiAvatar } from '@mui/material';

export const Container = styled(MuiContainer)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Wrapper = styled.div`
  background-color: #f2f2f2;
`;

export const WrapperButtons = styled.div`
  display: flex;
`;

export const Avatar = styled(MuiAvatar)`
  && {
    margin-left: 10px;
    cursor: pointer;
  }
`;
