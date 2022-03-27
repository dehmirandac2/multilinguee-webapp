import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import TutorCard from '@components/TutorCard';
import { Typography, Container } from '@mui/material';
import { CountriesList } from '@typing/CountriesList';

import { CardsWrapper } from './styles';

const tutorsList = [
  {
    id: 1,
    name: 'Joao Silva',
    avatar: 'J',
    rating: 4,
    favorite: false,
    description: 'Professor há 5 anos com ampla experiência em gramática da língua inglesa.',
    reviews: 201,
    country: 'us' as CountriesList,
  },
  {
    id: 2,
    name: 'Joao Silva',
    avatar: 'J',
    rating: 3,
    favorite: true,
    description: 'Professor há 5 anos com ampla experiência em gramática da língua inglesa.',
    reviews: 201,
    country: 'us' as CountriesList,
  },
  {
    id: 3,
    name: 'Joao Silva',
    avatar: 'J',
    rating: 4,
    favorite: false,
    description: 'Professor há 5 anos com ampla experiência em gramática da língua inglesa.',
    reviews: 201,
    country: 'it' as CountriesList,
  },
  {
    id: 4,
    name: 'Joao Silva',
    avatar: 'J',
    rating: 4,
    favorite: false,
    description: 'Professor há 5 anos com ampla experiência em gramática da língua inglesa.',
    reviews: 201,
    country: 'es' as CountriesList,
  },
  {
    id: 5,
    name: 'Joao Silva',
    avatar: 'J',
    rating: 4,
    favorite: false,
    description: 'Professor há 5 anos com ampla experiência em gramática da língua inglesa.',
    reviews: 201,
    country: 'de' as CountriesList,
  },
];
function ListTutors() {
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
          {tutorsList.map((tutor) => (
            <TutorCard key={tutor.id} data={tutor} />
          ))}
        </CardsWrapper>
      </Container>
    </>
  );
}

export default ListTutors;
