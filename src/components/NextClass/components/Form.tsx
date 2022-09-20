import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { Alert, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { loader } from 'graphql.macro';

import Input from '@components/Form/Input';
import TextArea from '@components/Form/TextArea';
import HourSelect from '@components/HourSelect';

import { Button, WrapperHour } from '../styles';
import { schema } from './validation';

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
    resolver: yupResolver(schema),
  });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  // const [createUser, { loading }] = useMutation(CREATE_USER, {
  //   onCompleted: (resp) => {
  //     setShowSuccess(true);
  //   },
  //   onError: () => {
  //     setShowError(true);
  //   },
  // });
  const loading = false;

  const onSubmit = (data: CreateUser) => {
    setShowError(false);
    setShowSuccess(false);
    // createUser({
    //   variables: {
    //     userInput: data,
    //   },
    // });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <WrapperHour>
          <HourSelect label="Início" control={control} name={'classDays.init'} />
          <HourSelect label="Fim" control={control} name={'classDays.end'} />
        </WrapperHour>
      </div>
      <div>
        <TextArea control={control} id="topic" label="Em que gostaria de trabalhar" name="topic" />
      </div>
      <Button variant="contained" color="secondary" size="large" type="submit" disabled={loading}>
        Agendar aula
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
