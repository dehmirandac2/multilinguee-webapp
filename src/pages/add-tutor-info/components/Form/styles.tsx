import styled from 'styled-components';
import { Typography, TextField, Button as MuiButton, Fab } from '@mui/material';

export const WrapperHour = styled.div`
  & > div {
    min-width: 150px;
    margin-right: 20px;
  }
`;

export const Subtitle = styled(Typography)`
  && {
    margin-top: 20px;
  }
`;

export const Button = styled(MuiButton)`
  && {
    align-self: flex-start;
    margin: 30px 0;
  }
`;

export const WrapperWekHour = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Day = styled(Fab)`
  && {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
`;
