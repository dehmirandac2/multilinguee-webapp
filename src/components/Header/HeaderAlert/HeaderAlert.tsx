import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Wrapper } from './styles';

interface IHeaderAlert {
  text: string;
  buttonText: string;
  onClick: () => void;
}

function HeaderAlert({ text, buttonText, onClick }: IHeaderAlert) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Typography color="white" mr={2}>
          {text}
        </Typography>
        <Button variant="contained" size="small" onClick={onClick}>
          {buttonText}
        </Button>
      </Container>
    </Wrapper>
  );
}

export default HeaderAlert;
