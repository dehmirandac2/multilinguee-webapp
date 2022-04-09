import { Subtitle, Input, Button } from './styles';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface Props {
  onSubmit: () => void;
  isLoading: boolean;
}

function Form({ onSubmit, isLoading }: Props) {
  return (
    <>
      <div>
        <Input label="Nome" variant="outlined" />
        <Input label="Sobrenome" variant="outlined" />
      </div>
      <div>
        <Input label="Email" variant="outlined" />
        <Input label="Senha" variant="outlined" type="password" />
      </div>
      <Subtitle variant="body1" gutterBottom>
        Estou me cadastrando para ser:
      </Subtitle>
      <RadioGroup row name="radio-type-user" defaultValue="aluno">
        <FormControlLabel value="aluno" control={<Radio />} label="Aluno" />
        <FormControlLabel value="professor" control={<Radio />} label="Professor" />
      </RadioGroup>
      <Button variant="contained" color="secondary" size="large" onClick={onSubmit}>
        Cadastrar
      </Button>
    </>
  );
}

export default Form;
