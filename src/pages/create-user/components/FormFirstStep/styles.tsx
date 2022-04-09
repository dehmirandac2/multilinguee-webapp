import styled from 'styled-components';
import { Typography, TextField, Button as MuiButton } from '@mui/material';

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

export const Input = styled(TextField)`
  && {
    width: calc(50% - 20px);
    margin-bottom: 20px;
    &:first-child {
      margin-right: 20px;
    }
  }
`;
