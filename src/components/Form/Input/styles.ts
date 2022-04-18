import styled from 'styled-components';
import { TextField } from '@mui/material';

export const MainInput = styled(TextField)`
  && {
    width: calc(50% - 20px);
    margin-bottom: 20px;
    &:first-child {
      margin-right: 20px;
    }
  }
`;
