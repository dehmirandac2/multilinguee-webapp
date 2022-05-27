import { useQuery } from '@apollo/client';
import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import TutorCard from '@components/TutorCard';
import { Typography, Container } from '@mui/material';
import { loader } from 'graphql.macro';

import { CardsWrapper } from './styles';

const GET_TUTORS = loader('../../queries/getTutors.gql');

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
  const { data } = useQuery(GET_TUTORS);

  return (
    <>
      <Header />
      <HeaderAlert
        text="Sua próxima aula será no dia: 20/11/2021 (sexta-feira)"
        buttonText="Gerenciar aula"
        onClick={() => {}}
      />
      <Container>
        <Typography variant="h4" mt={6} mb={5} gutterBottom>
          Encontre seu professor
        </Typography>
        <CardsWrapper>
          {data?.getTutors.map((tutor: Tutor) => (
            <TutorCard key={tutor.id} data={tutor} />
          ))}
        </CardsWrapper>
      </Container>
    </>
  );
}

export default ListTutors;
