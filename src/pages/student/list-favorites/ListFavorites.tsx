import { useQuery } from '@apollo/client';
import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import TutorCard from '@components/TutorCard';
import { Typography, Container, Skeleton } from '@mui/material';
import getDecodedToken from '@utils/token';

import { loader } from 'graphql.macro';

import { CardsWrapper, SkeletonWrapper } from './styles';

const GET_FAVORITES = loader('../../../queries/getFavorites.gql');

interface Tutor {
  id: number;
  name: string;
  surname: string;
  about: string;
  languages: string;
  stars: number;
  totalReviews: number;
  isFavorite: boolean;
}

function ListFavorites() {
  const { id: studentId } = getDecodedToken();
  const { data } = useQuery(GET_FAVORITES, {
    variables: { studentId: studentId?.toString() },
    fetchPolicy: 'network-only',
  });

  return (
    <>
      <Header typeUser="student" />
      <HeaderAlert
        text="Sua próxima aula será no dia: 20/08/2022 (sexta-feira)"
        buttonText="Gerenciar aula"
        onClick={() => {}}
      />
      <Container>
        <Typography variant="h4" mt={6} mb={5} gutterBottom>
          Lista de professores favoritos
        </Typography>
        <CardsWrapper>
          {data ? (
            data?.getFavorites.length > 0 ? (
              data?.getFavorites.map((tutor: Tutor) => (
                <TutorCard key={tutor.id} data={tutor} studentId={studentId} showFavorite={false} />
              ))
            ) : (
              'Nenhum professor favorito encontrado'
            )
          ) : (
            <SkeletonWrapper>
              <Skeleton variant="rectangular" height={180} />
              <Skeleton variant="rectangular" height={180} />
            </SkeletonWrapper>
          )}
        </CardsWrapper>
      </Container>
    </>
  );
}

export default ListFavorites;
