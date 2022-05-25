import { Container } from '@mui/material';
import HeaderLogin from '@components/Header/HeaderLogin';
import { Wrapper, FormWrapper, Title } from './styles';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

import Form from './components/Form';

function AddTutorInfo() {
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

export default AddTutorInfo;
