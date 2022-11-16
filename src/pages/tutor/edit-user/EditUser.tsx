import { Container } from '@mui/material';
import Header from '@components/Header/Header';

import Form from './components/Form';
import { Wrapper, FormWrapper, Title } from './styles';

function EditUser() {
  return (
    <>
      <Header typeUser="tutor" />
      <Container>
        <Wrapper>
          <FormWrapper>
            <Title variant="h4">Editar usuário</Title>
            <Form />
          </FormWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

export default EditUser;
