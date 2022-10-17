import styled from 'styled-components';
import { Card as MuiCard, CardActions as MuiCardActions } from '@mui/material';

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  & > img {
    margin-left: 5px;
  }
`;

export const WrapperRating = styled.div`
  display: flex;
  align-items: center;
  & > p {
    margin-left: 5px;
    margin-bottom: 0;
    padding-top: 1px;
  }
`;

export const Card = styled(MuiCard)`
  && {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const CardActions = styled(MuiCardActions)`
  && {
    justify-content: flex-end;
  }
`;
