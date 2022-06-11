import { Typography, Card, CardContent, CardHeader } from '@mui/material';

import { Calendar } from 'react-date-range';
import { pt } from 'react-date-range/dist/locale';

function NextClass() {
  return (
    <div>
      <Typography variant="h4" mt={6} mb={5} gutterBottom>
        Próximas aulas
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Calendar date={new Date()} locale={pt} />
        </CardContent>
      </Card>
    </div>
  );
}

export default NextClass;
