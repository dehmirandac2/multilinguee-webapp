import { CardContent, Typography, Button, Avatar, Rating, CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { WrapperRating, Card, CardActions, WrapperTitle } from './styles';
import Favorite from '@components/Favorite';

interface ITutorCard {
  studentId?: number;
  data: {
    id: number;
    name: string;
    surname: string;
    about: string;
    languages: string;
    stars: number;
    totalReviews: number;
    isFavorite: boolean;
  };
  showFavorite?: boolean;
}

function TutorCard({
  data: { id, name, surname, about, stars, totalReviews, languages, isFavorite },
  studentId,
  showFavorite = true,
}: ITutorCard) {
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <CardHeader
          avatar={<Avatar />}
          title={
            <WrapperTitle>
              {name} {surname}
              {languages.split(',').map((language) => (
                <img
                  key={language}
                  src={`/images/flags/${language}.png`}
                  width="15"
                  alt="bandeira"
                  title={`bandeira ${language}`}
                />
              ))}
            </WrapperTitle>
          }
          subheader={
            <WrapperRating>
              <Rating size="small" name="read-only" value={stars} readOnly />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {totalReviews} reviews
              </Typography>
            </WrapperRating>
          }
        />
        {showFavorite && <Favorite isFavorite={isFavorite} tutorId={id} studentId={studentId} />}

        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large" onClick={() => navigate(`/student/tutor-profile/${id}`)}>
          Agendar aula
        </Button>
      </CardActions>
    </Card>
  );
}

export default TutorCard;
