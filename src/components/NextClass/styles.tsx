import styled from 'styled-components';
import { Card as MUICard, CardContent as MUICardContent, Button as MuiButton, Fab } from '@mui/material';

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  & > h5 {
    width: 50%;
  }
`;

export const CardContent = styled(MUICardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 0 30px;

  & > form {
    width: 50%;
  }
`;

export const Card = styled(MUICard)`
  && {
    padding: 30px;
    margin-bottom: 30px;
  }
`;

export const Button = styled(MuiButton)`
  && {
    align-self: flex-start;
    margin-top: 30px;
  }
`;

export const WrapperHour = styled.div`
  display: flex;
  margin-bottom: 20px;
  & > div {
    min-width: 150px;
    margin-right: 20px;
    width: 50%;
  }
`;
