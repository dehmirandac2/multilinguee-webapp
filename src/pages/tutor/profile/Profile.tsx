import { Button, Container, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Book from '@mui/icons-material/MenuBook';
import Money from '@mui/icons-material/AttachMoney';

import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import NextClass from '@components/NextClass';

import { WrapperProfile, Navigation } from './styles';

function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <Header typeUser="tutor" />
      <HeaderAlert
        text="Sua próxima aula será no dia: 20/11/2021 (sexta-feira)"
        buttonText="Gerenciar aula"
        onClick={() => {}}
      />
      <Container>
        <WrapperProfile>
          <Avatar sx={{ width: 56, height: 56 }}>MF</Avatar>
          <Typography variant="h5" mt={6} mb={5} gutterBottom>
            João Silva
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
        <NextClass tutorId="1" />
      </Container>
    </>
  );
}

export default Profile;
