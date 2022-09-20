import { Button, Container, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Heart from '@mui/icons-material/FavoriteBorder';

import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import NextClass from '@components/NextClass';

import { WrapperProfile, Navigation, WrapperHeader } from './styles';

function TutorProfile() {
  const navigate = useNavigate();

  return (
    <>
      <Header typeUser="student" />
      <HeaderAlert
        text="Sua próxima aula será no dia: 20/11/2021 (sexta-feira)"
        buttonText="Gerenciar aula"
        onClick={() => {}}
      />
      <Container>
        <WrapperHeader>
          <WrapperProfile>
            <Avatar sx={{ width: 56, height: 56 }}>MF</Avatar>
            <Typography variant="h5" mt={6} mb={5} gutterBottom>
              Professor Fulano
            </Typography>
          </WrapperProfile>
          <Navigation>
            <Button startIcon={<Heart />} variant="contained" size="large" onClick={() => navigate('/favorites')}>
              Adicionar aos favoritos
            </Button>
          </Navigation>
        </WrapperHeader>
        <div>
          <Typography variant="h4" mt={6} mb={3} gutterBottom>
            Sobre o professor
          </Typography>
          <Typography mb={5} gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit scelerisque massa vitae tristique.
            Maecenas vulputate porta tortor, vel tincidunt nisl sagittis eu. Integer ut lobortis quam. Proin laoreet
            erat velit, nec ornare neque fermentum ut. Nullam nec bibendum risus, nec tincidunt leo. Cras molestie odio
            eros, a aliquet augue suscipit sit amet. Vivamus at libero in justo mollis ornare et ac quam. Morbi pulvinar
            a tellus a maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </Typography>
        </div>
        <NextClass />
      </Container>
    </>
  );
}

export default TutorProfile;
