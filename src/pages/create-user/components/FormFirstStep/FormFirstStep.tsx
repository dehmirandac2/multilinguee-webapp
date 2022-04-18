import { useForm } from 'react-hook-form';
import { FormControlLabel, Radio as MuiRadio } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

import Input from '@components/Form/Input';
import Radio from '@components/Form/Radio';

import { Subtitle, Button } from './styles';

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
  });

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

  const onSubmit = (data: CreateUser) => {
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
      <Subtitle variant="body1" gutterBottom>
        Estou me cadastrando para ser:
      </Subtitle>
      <Radio name="type" control={control} defaultValue="student">
        <FormControlLabel value="student" control={<MuiRadio />} label="Aluno" />
        <FormControlLabel value="tutor" control={<MuiRadio />} label="Professor" />
      </Radio>
      <Button variant="contained" color="secondary" size="large" type="submit" disabled={loading}>
        Cadastrar
      </Button>
    </form>
  );
}

export default Form;
