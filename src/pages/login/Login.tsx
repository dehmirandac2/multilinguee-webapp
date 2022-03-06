import { Button, Container } from "@mui/material";
import { FormWrapper, Wrapper, Title, Input, Link } from "./styles";

function Login() {
  return (
    <Container>
      <Wrapper>
        <div>img</div>
        <FormWrapper>
          <Title variant="h3">Bem-vindo ao Multilinguee</Title>
          <Input label="Email" variant="outlined" />
          <Input label="Senha" variant="outlined" />
          <Link href="#">Esqueceu sua senha?</Link>
          <Button variant="contained" size="large" color="secondary">
            Entrar
          </Button>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}

export default Login;
