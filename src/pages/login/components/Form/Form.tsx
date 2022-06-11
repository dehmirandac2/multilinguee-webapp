import { useForm } from 'react-hook-form';
import { Alert, Button, Snackbar } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import Input from '@components/Form/Input';

import { schema } from './validation';
import { FormWrapper, Title, Link, Wrapper } from './styles';
import { useState } from 'react';

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

  const navigate = useNavigate();

  const onSubmit = (data: Login) => {
    const { email, password } = data;

    // tutor
    if (email === 'joao.silva@gmail.com' && password === 'password') {
      navigate('/tutor/profile');
    }
    // student
    else if (email === 'marina.ferreira@gmail.com' && password === 'password') {
      navigate('/student/list-tutors');
    } else {
      setShowError(true);
    }
  };

  return (
    <Wrapper>
      <Title variant="h4">Bem-vindo ao Multilinguee!</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <Input control={control} label="Email" name="email" full />
          <Input control={control} label="Senha" name="password" type="password" full />
          <Link href="#">Esqueceu sua senha?</Link>
          <Button variant="contained" size="large" color="secondary" type="submit">
            Entrar
          </Button>
        </FormWrapper>
      </form>
      <Snackbar open={showError} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="error">Email e/ou senha errado(s). Tente novamente</Alert>
      </Snackbar>
    </Wrapper>
  );
}

export default Form;
