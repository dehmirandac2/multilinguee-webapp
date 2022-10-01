import { Typography } from '@mui/material';

import { CardTitleWrapper, Card, CardContent } from './styles';
import Form from './components/Form';

interface IProps {
  tutorId: string;
}

function NextClass({ tutorId }: IProps) {
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
          <Form tutorId={tutorId} />
        </CardContent>
      </Card>
    </div>
  );
}

export default NextClass;
