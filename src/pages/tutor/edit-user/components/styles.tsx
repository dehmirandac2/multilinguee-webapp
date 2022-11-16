import styled from 'styled-components';
import { Typography, Button as MuiButton } from '@mui/material';

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
