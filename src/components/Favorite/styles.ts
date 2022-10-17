import styled from 'styled-components';
import { Button, Rating } from '@mui/material';

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

export const StyledButton = styled(Button)({
  '&&': {
    color: '#000',
    paddingRight: '40px',
  },
});
