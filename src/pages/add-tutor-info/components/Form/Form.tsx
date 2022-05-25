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
import { useNavigate } from 'react-router-dom';

const CREATE_TUTOR = loader('../../../../queries/createTutor.gql');

interface CreateTutor {
  about: string;
  languages: [];
}

interface IWeekMap {
  [key: string]: string;
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
    onCompleted: (resp) => {
      console.log('>>>done', resp);
    },
  });

  const onSubmit = (data: CreateTutor) => {
    createTutor({
      variables: {
        tutorInput: data,
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
        <Checkbox control={control} name="languages[0].english" value="english" label="Inglês" />
        <Checkbox control={control} name="languages[1].spanish" value="spanish" label="Espanhol" />
        <Checkbox control={control} name="languages[2].french" value="french" label="Francês" />
        <Checkbox control={control} name="languages[3].german" value="german" label="Alemão" />
        <Checkbox control={control} name="languages[4].italian" value="italian" label="Italiano" />
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
            <HourSelect control={control} name={`classDays.${day}.finish`} />
          </WrapperHour>
        </WrapperWekHour>
      ))}
      <Button variant="contained" color="secondary" size="large" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default Form;
