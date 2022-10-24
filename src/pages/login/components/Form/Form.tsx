import { useForm } from 'react-hook-form';
import { Alert, Button, Snackbar } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { loader } from 'graphql.macro';

import Input from '@components/Form/Input';

import { schema } from './validation';
import { FormWrapper, Title, Link, Wrapper } from './styles';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

const LOGIN = loader('../../../../queries/login.gql');

interface Login {
  email: string;
  password: string;
}

function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(schema),
  });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted: (resp) => {
      setShowError(false);
      localStorage.setItem('token', resp.login.token);
      if (resp.login.type === 'tutor') {
        navigate('/tutor/profile');
      } else if (resp.login.type === 'student') {
        navigate('/student/list-tutors');
      }
    },
    onError: () => {
      setShowError(true);
    },
  });

  const onSubmit = (data: Login) => {
    login({ variables: data });
  };

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const userCreatedSuccess = queryParams.get('user-created-success');

  useEffect(() => {
    if (userCreatedSuccess) {
      setShowSuccess(true);
      queryParams.delete('user-created-success');
    }
  }, [userCreatedSuccess]);

  return (
    <Wrapper>
      <Title variant="h4">Bem-vindo ao Multilinguee!</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <Input control={control} label="Email" name="email" full />
          <Input control={control} label="Senha" name="password" type="password" full />
          <Link href="#">Esqueceu sua senha?</Link>
          <Button variant="contained" size="large" color="secondary" type="submit" disabled={loading}>
            Entrar
          </Button>
        </FormWrapper>
      </form>
      <Snackbar
        open={showError}
        onClose={() => setShowError(false)}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="error">Email e/ou senha errado(s). Tente novamente</Alert>
      </Snackbar>
      <Snackbar
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success">Usuário criado com sucesso</Alert>
      </Snackbar>
    </Wrapper>
  );
}

export default Form;
