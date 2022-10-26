import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { StyledRating, StyledButton } from './styles';
import { useState } from 'react';
import React from 'react';

const ADD_FAVORITE = loader('../../queries/addFavorite.gql');
const DELETE_FAVORITE = loader('../../queries/deleteFavorite.gql');

interface Props {
  isFavorite: boolean;
  tutorId: number;
  studentId?: number;
  asButton?: boolean;
}
const Favorite = ({ isFavorite, tutorId, studentId, asButton }: Props) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const [addFavorite] = useMutation(ADD_FAVORITE, {
    variables: { favoriteInput: { tutorId: tutorId?.toString(), studentId: studentId?.toString() } },
  });

  const [deleteFavorite] = useMutation(DELETE_FAVORITE, {
    variables: { favoriteInput: { tutorId: tutorId?.toString(), studentId: studentId?.toString() } },
  });

  const handleFavorite = () => {
    if (favorite) {
      deleteFavorite();
      setFavorite(false);
    } else {
      addFavorite();
      setFavorite(true);
    }
  };
  return (
    <>
      {asButton ? (
        <StyledButton variant="outlined" size="large" onClick={() => handleFavorite()}>
          Adicionar aos favoritos
          <StyledRating
            max={1}
            value={favorite ? 1 : 0}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </StyledButton>
      ) : (
        <StyledRating
          max={1}
          value={favorite ? 1 : 0}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          onChange={() => handleFavorite()}
        />
      )}
    </>
  );
};

export default React.memo(Favorite);
