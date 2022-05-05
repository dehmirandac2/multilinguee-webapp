import { Container } from '@mui/material';
import HeaderLogin from '@components/Header/HeaderLogin';
import { Wrapper, FormWrapper, Title } from './styles';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

import Form from './components/Form';

const CREATE_USER = loader('../../queries/createUser.gql');

function AddTutorInfo() {
  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: (resp) => {
      if (resp.createUser.type === 'tutor') {
      }
    },
  });

  const handleCreate = () => {};

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
