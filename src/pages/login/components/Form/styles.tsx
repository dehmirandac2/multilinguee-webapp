import styled from 'styled-components';
import { Typography, TextField, Link as MuiLink } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  && {
    margin-bottom: 40px;
  }
`;

export const Input = styled(TextField)`
  && {
    margin-bottom: 20px;
  }
`;

export const Link = styled(MuiLink)`
  && {
    margin-bottom: 20px;
  }
`;
