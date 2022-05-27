import { useForm } from 'react-hook-form';
import { Subtitle, WrapperHour, Button, Day, WrapperWekHour } from './styles';
import { FormControlLabel, FormGroup } from '@mui/material';
import { loader } from 'graphql.macro';
import { yupResolver } from '@hookform/resolvers/yup';

import HourSelect from '@components/HourSelect';
import TextArea from '@components/Form/TextArea';
import Checkbox from '@components/Form/Checkbox';

import { schema } from './validation';
import { useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';

const CREATE_TUTOR = loader('../../../../queries/createTutor.gql');

interface CreateTutor {
  about: string;
  languages: [];
  classDays: IClassDays;
}

interface IWeekMap {
  [key: string]: string;
}

interface IClassDays {
  [key: string]: { init: string; end: string };
}

function Form() {
  const weekMap: IWeekMap = {
    monday: 'Seg',
    tuesday: 'Ter',
    wednesday: 'Qua',
    thursday: 'Qui',
    friday: 'Sex',
    saturday: 'Sab',
    sunday: 'Dom',
  };

  const { id } = useParams();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateTutor>({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [createTutor, { loading }] = useMutation(CREATE_TUTOR, {
    onCompleted: () => {
      navigate('/login');
    },
  });

  const getNewLanguages = (languages: []) => {
    return languages.reduce((acc, obj) => {
      const language: string = Object.keys(obj)[0];
      if (obj[language] === true) {
        acc.push(language);
      }
      return acc;
    }, [] as string[]);
  };

  const getNewClassDays = (classDays: IClassDays) => {
    return Object.keys(classDays).reduce((acc, key) => {
      const { init, end } = classDays[key];
      if (init !== undefined && end !== undefined) {
        acc[key as keyof IClassDays] = { init, end };
      }
      return acc;
    }, {} as IClassDays);
  };

  const onSubmit = (data: CreateTutor) => {
    const { languages = [], classDays = {} } = data || {};
    const newLanguages: string[] = getNewLanguages(languages);

    const newClassDays = getNewClassDays(classDays);

    createTutor({
      variables: {
        tutorInput: {
          ...data,
          id,
          languages: newLanguages,
          classDays: newClassDays,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextArea
          control={control}
          id="about-you"
          label="Fale um pouco sobre você e seu método de ensino:"
          name="about"
        />
      </div>
      <Subtitle variant="body1" gutterBottom>
        Quais línguas gostaria de ensinar?
      </Subtitle>
      <FormGroup>
        <Checkbox control={control} name="languages[0].en" value="en" label="Inglês" />
        <Checkbox control={control} name="languages[1].es" value="es" label="Espanhol" />
        <Checkbox control={control} name="languages[2].fr" value="fr" label="Francês" />
        <Checkbox control={control} name="languages[3].ge" value="ge" label="Alemão" />
        <Checkbox control={control} name="languages[4].it" value="it" label="Italiano" />
      </FormGroup>
      <Subtitle variant="body1" gutterBottom>
        Dias e horários disponíveis para aula:
      </Subtitle>
      {Object.keys(weekMap).map((day: keyof IWeekMap) => (
        <WrapperWekHour key={weekMap[day]}>
          <Day variant="extended" size="medium" color="primary" aria-label="add">
            {weekMap[day]}
          </Day>
          <WrapperHour>
            <HourSelect control={control} name={`classDays.${day}.init`} />
            <HourSelect control={control} name={`classDays.${day}.end`} />
          </WrapperHour>
        </WrapperWekHour>
      ))}
      <Button variant="contained" color="secondary" size="large" type="submit" disabled={loading}>
        Cadastrar
      </Button>
    </form>
  );
}

export default Form;
