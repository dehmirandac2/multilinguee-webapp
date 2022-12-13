import { useForm } from 'react-hook-form';
import { Alert, FormControlLabel, Radio as MuiRadio, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { loader } from 'graphql.macro';

import Input from '@components/Form/Input';

import { Button } from './styles';
import { schema } from './validation';
import { useEffect, useState } from 'react';
import getDecodedToken from '@utils/token';
import { useQuery } from '@apollo/client';

const EDIT_USER = loader('../../../../queries/editUser.gql');
const GET_USER = loader('../../../../queries/getUser.gql');

interface EditUser {
  id: string;
  name: string;
  surname: string;
  email: string;
}

function Form() {
  const { id: studentId } = getDecodedToken();
  const { data: { getUser } = {} } = useQuery(GET_USER, {
    variables: { studentId: studentId?.toString() },
    fetchPolicy: 'network-only',
  });

  const { handleSubmit, control, reset, formState } = useForm<EditUser>({
    resolver: yupResolver(schema),
  });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (getUser) {
      const { name, surname, email } = getUser[0];
      reset({ name, surname, email });
    }
  }, [getUser]);

  const [editUser, { loading }] = useMutation(EDIT_USER, {
    onCompleted: (resp) => {
      setShowSuccess(true);
    },
    onError: () => {
      setShowError(true);
    },
  });

  const onSubmit = (data: EditUser) => {
    setShowError(false);
    setShowSuccess(false);
    const finalData = {
      ...data,
      id: studentId,
    };
    editUser({
      variables: {
        userInput: finalData,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input control={control} label="Nome" name="name" InputLabelProps={{ shrink: true }} />
        <Input control={control} label="Sobrenome" name="surname" InputLabelProps={{ shrink: true }} />
      </div>
      <div>
        <Input control={control} label="Email" name="email" InputLabelProps={{ shrink: true }} />
      </div>
      <Button variant="contained" color="secondary" size="large" type="submit" disabled={loading}>
        Salvar
      </Button>
      <Snackbar open={showError} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="error">Erro ao atualizar o perfil. Tente novamente</Alert>
      </Snackbar>
      <Snackbar open={showSuccess} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="success">Perfil atualizado com sucesso</Alert>
      </Snackbar>
    </form>
  );
}

export default Form;
