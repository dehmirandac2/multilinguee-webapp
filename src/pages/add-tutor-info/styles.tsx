import styled from 'styled-components';
import { Typography } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Title = styled(Typography)`
  && {
    margin-bottom: 40px;
  }
`;
