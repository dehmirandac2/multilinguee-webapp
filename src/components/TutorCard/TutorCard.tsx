import { CardContent, Typography, Button, Avatar, Rating, CardHeader } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StyledRating, WrapperRating, Card, CardActions, WrapperTitle } from './styles';

import { CountriesList } from '@typing/CountriesList';

interface ITutorCard {
  data: {
    avatar: string;
    name: string;
    description: string;
    rating: number;
    favorite: boolean;
    reviews: number;
    country: CountriesList;
  };
}

function TutorCard({ data: { avatar, name, description, rating, favorite, reviews, country } }: ITutorCard) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <CardHeader
          avatar={<Avatar>{avatar}</Avatar>}
          title={
            <WrapperTitle>
              {name}{' '}
              <img src={`/images/flags/${country}.png`} width="15" alt="bandeira" title={`bandeira ${country}`} />
            </WrapperTitle>
          }
          subheader={
            <WrapperRating>
              <Rating size="small" name="read-only" value={rating} readOnly />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {reviews} reviews
              </Typography>
            </WrapperRating>
          }
        />

        <StyledRating
          max={1}
          defaultValue={favorite ? 1 : 0}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />

        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {description}
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
