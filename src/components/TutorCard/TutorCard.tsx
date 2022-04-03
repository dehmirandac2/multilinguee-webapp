import { CardContent, Typography, Button, Avatar, Rating, CardHeader } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StyledRating, WrapperRating, Card, CardActions, WrapperTitle } from './styles';

import { LanguagesList } from '@typing/LanguagesList';

interface ITutorCard {
  data: {
    id: number;
    name: string;
    about: string;
    languages: LanguagesList[];
    reviews: {
      stars: number;
      total: number;
    };
  };
}

function TutorCard({ data: { name, about, reviews, languages } }: ITutorCard) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <CardHeader
          avatar={<Avatar />}
          title={
            <WrapperTitle>
              {name}{' '}
              {languages.map((language) => (
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
              <Rating size="small" name="read-only" value={reviews?.stars} readOnly />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {reviews?.total} reviews
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
