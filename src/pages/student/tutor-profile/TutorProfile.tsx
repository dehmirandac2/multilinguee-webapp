import { useQuery } from '@apollo/client';

import { Button, Container, Typography, Avatar, CircularProgress } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Heart from '@mui/icons-material/FavoriteBorder';
import { loader } from 'graphql.macro';

import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import NextClass from '@components/NextClass';
import getDecodedToken from '@utils/token';

import { WrapperProfile, Navigation, WrapperHeader } from './styles';
import Favorite from '@components/Favorite';

const GET_TUTOR = loader('../../../queries/getTutor.gql');

function TutorProfile() {
  const paths = useLocation().pathname.split('/');
  const id = paths[paths.length - 1];
  const { id: studentId } = getDecodedToken();

  const { loading, data } = useQuery(GET_TUTOR, {
    variables: { tutorInput: { tutorId: id, studentId: studentId?.toString() } },
  });

  return (
    <>
      <Header typeUser="student" />
      <HeaderAlert
        text="Sua próxima aula será no dia: 20/11/2021 (sexta-feira)"
        buttonText="Gerenciar aula"
        onClick={() => {}}
      />
      <Container>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <WrapperHeader>
              <WrapperProfile>
                <Avatar sx={{ width: 56, height: 56 }}>MF</Avatar>
                <Typography variant="h5" mt={6} mb={5} gutterBottom>
                  {data.getTutor.name} {data.getTutor.surname}
                </Typography>
              </WrapperProfile>
              <Navigation>
                <Favorite
                  asButton
                  isFavorite={data.getTutor.isFavorite}
                  tutorId={data.getTutor.id}
                  studentId={studentId}
                />
              </Navigation>
            </WrapperHeader>
            <div>
              <Typography variant="h4" mt={6} mb={3} gutterBottom>
                Sobre o professor
              </Typography>
              <Typography mb={5} gutterBottom>
                {data.getTutor.about}
              </Typography>
            </div>
            <NextClass tutorId={data.getTutor.id} />
          </>
        )}
      </Container>
    </>
  );
}

export default TutorProfile;
