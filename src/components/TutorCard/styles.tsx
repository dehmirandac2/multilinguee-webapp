import styled from 'styled-components';
import { Rating, Card as MuiCard, CardActions as MuiCardActions } from '@mui/material';

export const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
  '&&': {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
});

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
    /* width: 400px; */
  }
`;

export const CardActions = styled(MuiCardActions)`
  && {
    justify-content: flex-end;
  }
`;
