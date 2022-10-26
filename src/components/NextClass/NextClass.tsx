import { Typography } from '@mui/material';

import { CardTitleWrapper, Card, CardContent } from './styles';
import Form from './components/Form';

interface Class {
  id: string;
  date: Date;
  init: string;
  end: string;
  topic: string;
}

interface IProps {
  tutorId: string;
  currentClass?: Class;
}

function NextClass({ tutorId, currentClass }: IProps) {
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
          <Form tutorId={tutorId} currentClass={currentClass} />
        </CardContent>
      </Card>
    </div>
  );
}

export default NextClass;
