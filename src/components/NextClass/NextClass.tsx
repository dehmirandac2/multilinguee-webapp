import { Typography } from '@mui/material';

import { Calendar } from 'react-date-range';
import { pt } from 'react-date-range/dist/locale';

import { CardTitleWrapper, Card, CardContent } from './styles';
import Form from './components/Form';

function NextClass() {
  return (
    <div>
      <Typography variant="h4" mt={6} mb={5} gutterBottom>
        Próximas aulas
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardTitleWrapper>
          <Typography variant="h5" mb={4} gutterBottom>
            Selecione o dia
          </Typography>
          <Typography variant="h5" mb={4} gutterBottom>
            Selecione o horário
          </Typography>
        </CardTitleWrapper>

        <CardContent>
          <Calendar date={new Date()} locale={pt} />
          <Form />
        </CardContent>
      </Card>
    </div>
  );
}

export default NextClass;
