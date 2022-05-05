import { Subtitle, TextArea, WrapperHour, Button, Day, WrapperWekHour } from './styles';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import HourSelect from '@components/HourSelect';

function Form() {
  const weekMap = {
    monday: 'Seg',
    tuesday: 'Ter',
    wednesday: 'Qua',
    thursday: 'Qui',
    friday: 'Sex',
    saturday: 'Sab',
    sunday: 'Dom',
  };

  return (
    <>
      <div>
        <TextArea id="about-you" label="Fale um pouco sobre você e seu método de ensino:" multiline rows={4} />
      </div>
      <Subtitle variant="body1" gutterBottom>
        Quais línguas gostaria de ensinar?
      </Subtitle>
      <FormGroup>
        <FormControlLabel control={<Checkbox name="english" />} label="Inglês" />
        <FormControlLabel control={<Checkbox name="spanish" />} label="Espanhol" />
        <FormControlLabel control={<Checkbox name="french" />} label="Francês" />
        <FormControlLabel control={<Checkbox name="german" />} label="Alemão" />
        <FormControlLabel control={<Checkbox name="italian" />} label="Italiano" />
      </FormGroup>
      <Subtitle variant="body1" gutterBottom>
        Dias e horários disponíveis para aula:
      </Subtitle>
      {Object.values(weekMap).map((day) => (
        <WrapperWekHour key={day}>
          <Day variant="extended" size="medium" color="primary" aria-label="add">
            {day}
          </Day>
          <WrapperHour>
            <HourSelect />
            <HourSelect />
          </WrapperHour>
        </WrapperWekHour>
      ))}
      <Button variant="contained" color="secondary" size="large">
        Cadastrar
      </Button>
    </>
  );
}

export default Form;
