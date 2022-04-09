import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Wrapper } from './styles';

function HeaderLogin({ showButton = true }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <a href="#" onClick={() => navigate('/login')}>
          <img src="/images/logo-multilinguee.png" width="300" alt="Multilinguee logo" />
        </a>
        {showButton && (
          <Button variant="contained" size="large" onClick={() => navigate('/create-user')}>
            Criar conta
          </Button>
        )}
      </Wrapper>
    </Container>
  );
}

export default HeaderLogin;
