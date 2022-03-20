import { Container } from '@mui/material';
import HeaderLogin from '@components/Header/HeaderLogin';
import Form from './components/Form';
import { Wrapper } from './styles';

function Login() {
  return (
    <>
      <HeaderLogin />
      <Container>
        <Wrapper>
          <img src="/images/login-illustration.png" width="400" alt="girl studying" />
          <Form />
        </Wrapper>
      </Container>
    </>
  );
}

export default Login;
