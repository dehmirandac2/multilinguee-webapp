import { FormWrapper, Title, Input, Link, Wrapper } from './styles';
import { Button } from '@mui/material';

function Form() {
  return (
    <Wrapper>
      <Title variant="h4">Bem-vindo ao Multilinguee!</Title>
      <FormWrapper>
        <Input label="Email" variant="outlined" />
        <Input label="Senha" variant="outlined" />
        <Link href="#">Esqueceu sua senha?</Link>
        <Button variant="contained" size="large" color="secondary">
          Entrar
        </Button>
      </FormWrapper>
    </Wrapper>
  );
}

export default Form;
