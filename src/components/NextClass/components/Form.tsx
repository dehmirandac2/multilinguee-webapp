import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Snackbar } from '@mui/material';
import { pt } from 'react-date-range/dist/locale';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Calendar } from 'react-date-range';

import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '@components/Form/TextArea';
import HourSelect from '@components/HourSelect';

import getDecodedToken from '@utils/token';

import { Button, WrapperHour, WrapperForm } from '../styles';
import { schema } from './validation';
import { defaultHoursList } from '@components/HourSelect/HourSelect';

const CREATE_CLASS = loader('../../../queries/createClass.gql');
const EDIT_CLASS = loader('../../../queries/editClass.gql');
const GET_TUTOR_CLASSES = loader('../../../queries/getTutorClasses.gql');

interface CreateClass {
  date: Date;
  end: string;
  init: string;
  studentId: string;
  topic: string;
  tutorId: string;
}
interface Classes {
  id: string;
  date: Date;
  init: string;
  end: string;
}

interface Class {
  id: string;
  date: Date;
  init: string;
  end: string;
  topic: string;
}

interface Props {
  tutorId: string;
  currentClass?: Class;
}

function Form({ tutorId, currentClass }: Props) {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CreateClass>({
    resolver: yupResolver(schema),
    defaultValues: currentClass,
  });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState(currentClass?.date ? new Date(currentClass?.date) : new Date());
  const [unavailableInitHours, setUnavailableInitHours] = useState<string[]>([]);
  const [unavailableEndHours, setUnavailableEndHours] = useState<string[]>([]);
  const [selectedInitHour, setSelectedInitHour] = useState<string[]>([]);

  const { id: studentId } = getDecodedToken();

  const resetForm = () => {
    reset({ init: '', end: '', topic: '' });
  };

  const [getTutorClasses, { data }] = useLazyQuery(GET_TUTOR_CLASSES, {
    variables: { tutorId },
  });
  const nextClasses = data?.getTutorClasses;

  const [createClass, { loading }] = useMutation(CREATE_CLASS, {
    onCompleted: () => {
      setShowSuccess(true);
      getTutorClasses();
      resetForm();
    },
    onError: () => {
      setShowError(true);
    },
  });

  const [editClass, { loading: loadingEdit }] = useMutation(EDIT_CLASS, {
    onCompleted: () => {
      setShowSuccess(true);
    },
    onError: () => {
      setShowError(true);
    },
  });

  useEffect(() => {
    getTutorClasses();
  }, []);

  const onSubmit = (formData: CreateClass) => {
    setShowError(false);
    setShowSuccess(false);

    const finalData = {
      ...formData,
      date: selectedDate,
    };

    if (currentClass) {
      editClass({
        variables: {
          classEditInput: {
            ...finalData,
            id: currentClass.id,
          },
        },
      });
      return;
    }

    createClass({
      variables: {
        classInput: { ...finalData, tutorId, studentId },
      },
    });
  };

  const getAlreadyReservedHours = (date: Date) => {
    return nextClasses?.reduce((acc: string[], el: Classes) => {
      const isSameDate = new Date(el.date).toDateString() === new Date(date).toDateString();
      if (isSameDate) {
        acc.push(el.init);
        acc.push(el.end);
      }
      return acc;
    }, []);
  };

  const getPastHours = (date: Date) => {
    const hour = new Date(date).getHours();
    const formattedHour = `${hour}:00`;
    return [...defaultHoursList].splice(0, defaultHoursList.indexOf(formattedHour) + 1);
  };

  const checkUnavailableHours = (date: Date) => {
    const reservedHours = getAlreadyReservedHours(date) || [];
    const pastHours = getPastHours(date) || [];
    setUnavailableInitHours([...reservedHours, ...pastHours]);
    setUnavailableEndHours([...reservedHours, ...pastHours]);
  };

  const handleDate = (date: Date) => {
    setSelectedDate(date);
    checkUnavailableHours(date);
    resetForm();
  };

  const handleChangeInitHour = (e: any) => {
    const hour = e.target.value;

    const unavailable = [...defaultHoursList].splice(0, defaultHoursList.indexOf(hour) + 1);
    setSelectedInitHour(unavailable);
    setValue('init', hour);
  };

  useEffect(() => {
    checkUnavailableHours(selectedDate);
  }, [nextClasses]);

  const currentDate = new Date();
  const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WrapperForm>
        <Calendar date={selectedDate} minDate={currentDate} maxDate={maxDate} locale={pt} onChange={handleDate} />
        <div>
          <div>
            <WrapperHour>
              <HourSelect
                onChange={handleChangeInitHour}
                unavailableHours={unavailableInitHours}
                label="Início"
                control={control}
                name="init"
              />
              <HourSelect
                onChange={(e) => setValue('end', e.target.value)}
                unavailableHours={[...unavailableEndHours, ...selectedInitHour]}
                label="Fim"
                control={control}
                name="end"
              />
            </WrapperHour>
          </div>
          <div>
            <TextArea control={control} id="topic" label="Em que gostaria de trabalhar" name="topic" />
          </div>
          <Button variant="contained" color="secondary" size="large" type="submit" disabled={loading || loadingEdit}>
            {currentClass ? 'Reagendar aula' : 'Agendar aula'}
          </Button>
        </div>
      </WrapperForm>
      <Snackbar open={showError} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="error">Erro ao agendar a aula. Tente novamente</Alert>
      </Snackbar>
      <Snackbar
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success">{currentClass ? 'Aula alterada com sucesso' : 'Aula agendada com sucesso'}</Alert>
      </Snackbar>
    </form>
  );
}

export default Form;
