import { Container } from '@mui/material';
import HeaderLogin from '@components/Header/HeaderLogin';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

import FormFirstStep from './components/FormFirstStep';
import { Wrapper, FormWrapper, Title } from './styles';

const CREATE_USER = loader('../../queries/createUser.gql');

function CreateUser() {
  const navigate = useNavigate();

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: (resp) => {
      if (resp.createUser.type === 'tutor') {
        navigate('/add-tutor-info');
      } else {
        navigate('/login');
      }
    },
  });

  const handleCreate = () => {
    createUser({
      variables: {
        userInput: {
          name: 'Joao',
          surname: 'Silva',
          email: 'joao.silva@gmail.com',
          password: '123456',
          type: 'tutor',
        },
      },
    });
  };

  return (
    <>
      <HeaderLogin showButton={false} />
      <Container>
        <Wrapper>
          <FormWrapper>
            <Title variant="h4">Cadastre-se no Multilinguee!</Title>
            <FormFirstStep onSubmit={handleCreate} isLoading={loading} />
          </FormWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

export default CreateUser;
