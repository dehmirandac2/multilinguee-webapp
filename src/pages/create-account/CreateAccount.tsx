import { Container } from '@mui/material';
import HeaderLogin from '@components/Header/HeaderLogin';
import FormFirstStep from './components/FormFirstStep';
import FormSecondStep from './components/FormSecondStep';
import { Wrapper, FormWrapper, Title } from './styles';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

const CREATE_USER = loader('../../queries/createUser.gql');

function CreateAccount() {
  const [createUser, { loading }] = useMutation(CREATE_USER);

  const handleCreate = () => {};

  return (
    <>
      <HeaderLogin showButton={false} />
      <Container>
        <Wrapper>
          <FormWrapper>
            <Title variant="h4">Cadastre-se no Multilinguee!</Title>
            <FormFirstStep onSubmit={handleCreate} />
            {/* <FormSecondStep /> */}
          </FormWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

export default CreateAccount;
