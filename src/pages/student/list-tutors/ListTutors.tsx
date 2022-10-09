import { useQuery } from '@apollo/client';
import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import TutorCard from '@components/TutorCard';
import { Typography, Container, Skeleton } from '@mui/material';
import getDecodedToken from '@utils/token';

import { loader } from 'graphql.macro';

import { CardsWrapper, SkeletonWrapper } from './styles';

const GET_TUTORS = loader('../../../queries/getTutors.gql');

interface Tutor {
  id: number;
  name: string;
  surname: string;
  about: string;
  languages: string;
  stars: number;
  totalReviews: number;
}

function ListTutors() {
  const { id: studentId } = getDecodedToken();
  const { data } = useQuery(GET_TUTORS, { variables: { studentId } });

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
          Encontre seu professor
        </Typography>
        <CardsWrapper>
          {data ? (
            data?.getTutors.map((tutor: Tutor) => <TutorCard key={tutor.id} data={tutor} />)
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

export default ListTutors;
