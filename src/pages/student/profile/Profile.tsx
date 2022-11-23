import { Button, Container, Typography, Avatar, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

import Heart from '@mui/icons-material/FavoriteBorder';
import Book from '@mui/icons-material/MenuBook';
import Money from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

import getDecodedToken from '@utils/token';

import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';

import { WrapperProfile, Navigation, CardsWrapper, SkeletonWrapper } from './styles';
import NextClassesCard from '@components/NextClassesCard';

const GET_USER = loader('../../../queries/getUser.gql');
const GET_STUDENT_CLASSES = loader('../../../queries/getStudentClasses.gql');

function Profile() {
  const navigate = useNavigate();

  const { id: studentId } = getDecodedToken();

  const { data } = useQuery(GET_USER, { variables: { studentId: studentId?.toString() }, fetchPolicy: 'network-only' });
  const { data: studentClasses } = useQuery(GET_STUDENT_CLASSES, {
    variables: { studentId: studentId?.toString() },
    fetchPolicy: 'network-only',
  });

  return (
    <>
      <Header typeUser="student" />
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
          <Button startIcon={<Heart />} variant="contained" size="large" onClick={() => navigate('/student/favorites')}>
            Professores favoritos
          </Button>
          <Button startIcon={<Book />} variant="contained" size="large" onClick={() => navigate('/classes')}>
            Aulas anteriores
          </Button>
          <Button startIcon={<Money />} variant="contained" size="large" onClick={() => navigate('/payment')}>
            Meu plano
          </Button>
        </Navigation>
        <Typography variant="h5" mt={6} mb={5} gutterBottom>
          Próximas aulas:
        </Typography>
        <CardsWrapper>
          {studentClasses ? (
            studentClasses?.getStudentClasses.length > 0 ? (
              studentClasses?.getStudentClasses.map((classData: any) => (
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
