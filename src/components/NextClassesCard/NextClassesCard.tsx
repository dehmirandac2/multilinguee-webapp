import { CardContent, Typography, Button, Avatar, Rating, CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Card, CardActions, WrapperTitle } from './styles';

interface ITutorCard {
  data: {
    id: number;
    name: string;
    surname: string;
    date: string;
    init: string;
    end: string;
  };
}

function NextClassesCard({ data: { id, name, surname, date, init, end } }: ITutorCard) {
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <CardHeader
          avatar={<Avatar />}
          title={
            <WrapperTitle>
              {name} {surname}
            </WrapperTitle>
          }
        />

        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Dia: {new Date(date)?.toLocaleDateString('pt-BR')}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Hora de início: {init}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Hora de fim: {end}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large" onClick={() => navigate(`/student/manage-class/${id}`)}>
          Gerenciar aula
        </Button>
      </CardActions>
    </Card>
  );
}

export default NextClassesCard;
