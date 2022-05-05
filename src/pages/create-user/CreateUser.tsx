import { Container } from '@mui/material';
import HeaderLogin from '@components/Header/HeaderLogin';

import Form from './components/Form';
import { Wrapper, FormWrapper, Title } from './styles';

function CreateUser() {
  return (
    <>
      <HeaderLogin showButton={false} />
      <Container>
        <Wrapper>
          <FormWrapper>
            <Title variant="h4">Cadastre-se no Multilinguee!</Title>
            <Form />
          </FormWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

export default CreateUser;
