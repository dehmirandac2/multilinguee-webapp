import { CardContent, Typography, Button, Avatar, Rating, CardHeader } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StyledRating, WrapperRating, Card, CardActions, WrapperTitle } from './styles';

interface ITutorCard {
  data: {
    id: number;
    name: string;
    surname: string;
    about: string;
    languages: string;
    stars: number;
    totalReviews: number;
  };
}

function TutorCard({ data: { name, surname, about, stars, totalReviews, languages } }: ITutorCard) {
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

        <StyledRating
          max={1}
          defaultValue={0}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />

        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large">
          Agendar aula
        </Button>
      </CardActions>
    </Card>
  );
}

export default TutorCard;
