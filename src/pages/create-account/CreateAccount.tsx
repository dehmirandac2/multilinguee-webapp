import { Container } from '@mui/material';
import HeaderLogin from '@components/Header/HeaderLogin';
import FormFirstStep from './components/FormFirstStep';
import FormSecondStep from './components/FormSecondStep';
import { Wrapper, FormWrapper, Title } from './styles';

function Login() {
  return (
    <>
      <HeaderLogin showButton={false} />
      <Container>
        <Wrapper>
          <FormWrapper>
            <Title variant="h4">Cadastre-se no Multilinguee!</Title>
            {/* <FormFirstStep /> */}
            <FormSecondStep />
          </FormWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

export default Login;
