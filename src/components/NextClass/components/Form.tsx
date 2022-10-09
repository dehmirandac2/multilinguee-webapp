import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Snackbar } from '@mui/material';
import { pt } from 'react-date-range/dist/locale';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Calendar } from 'react-date-range';

import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '@components/Form/TextArea';
import HourSelect from '@components/HourSelect';

import getDecodedToken from '@utils/token';

import { Button, WrapperHour, WrapperForm } from '../styles';
import { schema } from './validation';

const CREATE_CLASS = loader('../../../queries/createClass.gql');

interface CreateClass {
  name: string;
  surname: string;
  email: string;
  password: string;
  type: 'student' | 'tutor';
}

interface IProps {
  tutorId: string;
}

function Form({ tutorId }: IProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateClass>({
    resolver: yupResolver(schema),
  });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const { id: studentId } = getDecodedToken();

  const [createClass, { loading }] = useMutation(CREATE_CLASS, {
    onCompleted: (resp) => {
      setShowSuccess(true);
    },
    onError: () => {
      setShowError(true);
    },
  });

  const onSubmit = (data: CreateClass) => {
    setShowError(false);
    setShowSuccess(false);
    createClass({
      variables: {
        classInput: {
          ...data,
          tutorId,
          studentId,
          date: currentDate,
        },
      },
    });
  };

  const handleDate = (selectedDate: any) => {
    setCurrentDate(selectedDate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WrapperForm>
        <Calendar locale={pt} onChange={handleDate} />
        <div>
          <div>
            <WrapperHour>
              <HourSelect label="Início" control={control} name={'init'} />
              <HourSelect label="Fim" control={control} name={'end'} />
            </WrapperHour>
          </div>
          <div>
            <TextArea control={control} id="topic" label="Em que gostaria de trabalhar" name="topic" />
          </div>
          <Button variant="contained" color="secondary" size="large" type="submit" disabled={loading}>
            Agendar aula
          </Button>
        </div>
      </WrapperForm>
      <Snackbar open={showError} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="error">Erro ao agendar a aula. Tente novamente</Alert>
      </Snackbar>
      <Snackbar open={showSuccess} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="success">Aula agendada com sucesso</Alert>
      </Snackbar>
    </form>
  );
}

export default Form;
