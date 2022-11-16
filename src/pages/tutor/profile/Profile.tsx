import { Button, Container, Typography, Avatar, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

import Book from '@mui/icons-material/MenuBook';
import Money from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import NextClassesCard from '@components/NextClassesCard';
import getDecodedToken from '@utils/token';

import { WrapperProfile, Navigation, CardsWrapper, SkeletonWrapper } from './styles';

const GET_USER = loader('../../../queries/getUser.gql');
const GET_TUTOR_CLASSES = loader('../../../queries/getTutorClasses.gql');

function Profile() {
  const navigate = useNavigate();
  const { id: tutorId } = getDecodedToken();

  const { data } = useQuery(GET_USER, { variables: { studentId: tutorId?.toString() } });
  const { data: tutorClasses } = useQuery(GET_TUTOR_CLASSES, {
    variables: { tutorId: tutorId?.toString() },
  });

  return (
    <>
      <Header typeUser="tutor" />
      <HeaderAlert />
      <Container>
        <WrapperProfile>
          <Avatar sx={{ width: 56, height: 56 }}>
            <PersonIcon />
          </Avatar>
          <Typography variant="h5" mt={6} mb={5} gutterBottom>
            {data?.getUser?.[0]?.name} {data?.getUser?.[0]?.surname}
          </Typography>
        </WrapperProfile>
        <Navigation>
          <Button startIcon={<Book />} variant="contained" size="large" onClick={() => navigate('/favorites')}>
            Detalhes de aulas anteriores
          </Button>
          <Button startIcon={<Money />} variant="contained" size="large" onClick={() => navigate('/payment')}>
            Solicitar pagamento
          </Button>
        </Navigation>
        <Typography variant="h5" mt={6} mb={5} gutterBottom>
          Próximas aulas:
        </Typography>
        <CardsWrapper>
          {tutorClasses ? (
            tutorClasses?.getTutorClasses.length > 0 ? (
              tutorClasses?.getTutorClasses.map((classData: any) => (
                <NextClassesCard key={classData.id} data={classData} />
              ))
            ) : (
              'Nenhuma aula agendada'
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

export default Profile;
