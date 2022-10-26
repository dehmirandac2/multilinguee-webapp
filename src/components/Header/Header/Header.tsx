import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import LogoutIcon from '@mui/icons-material/Logout';

import { Wrapper, Container, WrapperButtons, Avatar } from './styles';
import getDecodedToken from '@utils/token';

type Config = {
  student: {
    profileUrl: string;
    homeUrl: string;
    configUrl: string;
  };
  tutor: {
    profileUrl: string;
    homeUrl: string;
    configUrl: string;
  };
};

type TypeUser = keyof Config;

function Header({ typeUser }: { typeUser: TypeUser }) {
  const navigate = useNavigate();

  const config: Config = {
    student: {
      profileUrl: '/student/profile',
      homeUrl: '/student/list-tutors',
      configUrl: '/student/edit-user',
    },
    tutor: {
      profileUrl: '/tutor/profile',
      homeUrl: '/tutor/profile',
      configUrl: '/tutor/edit-user',
    },
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Wrapper>
      <Container>
        <a href="#" onClick={() => navigate(config[typeUser].homeUrl)}>
          <img src="/images/logo-multilinguee.png" width="250" alt="Multilinguee logo" />
        </a>
        <WrapperButtons>
          <IconButton color="secondary" aria-label="notification" component="span">
            <NotificationsIcon />
          </IconButton>
          <IconButton
            onClick={() => navigate(config[typeUser].configUrl)}
            color="secondary"
            aria-label="settings"
            component="span"
          >
            <SettingsIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="logout" component="span" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
          <Avatar onClick={() => navigate(config[typeUser].profileUrl)}>
            <PersonIcon />
          </Avatar>
        </WrapperButtons>
      </Container>
    </Wrapper>
  );
}

export default Header;
