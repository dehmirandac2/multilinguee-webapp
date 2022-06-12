import styled from 'styled-components';
import { TextField } from '@mui/material';

type Prop = any;

export const MainInput = styled(TextField)`
  && {
    width: ${({ full }: Prop) => (full ? '100%' : 'calc(50% - 20px)')};
    margin-bottom: 20px;
    &:first-child {
      margin-right: 20px;
    }
  }
`;
