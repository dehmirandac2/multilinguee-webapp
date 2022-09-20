import { useForm } from 'react-hook-form';
import { Alert, FormControlLabel, Radio as MuiRadio, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { loader } from 'graphql.macro';

import Input from '@components/Form/Input';
import Radio from '@components/Form/Radio';

import { Subtitle, Button } from './styles';
import { schema } from './validation';
import { useState } from 'react';

const CREATE_USER = loader('../../../../queries/createUser.gql');

interface CreateUser {
  name: string;
  surname: string;
  email: string;
  password: string;
  type: 'student' | 'tutor';
}

function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUser>({
    defaultValues: {
      type: 'student',
    },
    resolver: yupResolver(schema),
  });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: (resp) => {
      setShowSuccess(true);
    },
    onError: () => {
      setShowError(true);
    },
  });

  const onSubmit = (data: CreateUser) => {
    setShowError(false);
    setShowSuccess(false);
    createUser({
      variables: {
        userInput: data,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input control={control} label="Nome" name="name" />
        <Input control={control} label="Sobrenome" name="surname" />
      </div>
      <div>
        <Input control={control} label="Email" name="email" />
        <Input control={control} label="Senha" name="password" type="password" />
      </div>
      <Button variant="contained" color="secondary" size="large" type="submit" disabled={loading}>
        Salvar
      </Button>
      <Snackbar open={showError} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="error">Erro ao atualizar o perfil. Tente novamente</Alert>
      </Snackbar>
      <Snackbar open={showSuccess} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="error">Perfil atualizado com sucesso</Alert>
      </Snackbar>
    </form>
  );
}

export default Form;
