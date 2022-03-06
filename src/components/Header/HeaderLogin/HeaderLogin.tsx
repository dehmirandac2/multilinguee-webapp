import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Wrapper } from './styles';

function HeaderLogin() {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <a href="#" onClick={() => navigate('/login')}>
          <img src="/images/logo-multilinguee.png" width="300" alt="Multilinguee logo" />
        </a>
        <Button variant="contained" size="large" onClick={() => navigate('/create-account')}>
          Criar conta
        </Button>
      </Wrapper>
    </Container>
  );
}

export default HeaderLogin;
