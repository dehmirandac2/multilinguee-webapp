import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

import { Wrapper, Container, WrapperButtons, Avatar } from './styles';

type Config = {
  student: {
    profileUrl: string;
    homeUrl: string;
  };
  tutor: {
    profileUrl: string;
    homeUrl: string;
  };
};

type TypeUser = keyof Config;

function Header({ typeUser }: { typeUser: TypeUser }) {
  const navigate = useNavigate();

  const config: Config = {
    student: {
      profileUrl: '/student/profile',
      homeUrl: '/student/list-tutors',
    },
    tutor: {
      profileUrl: '/tutor/profile',
      homeUrl: '/tutor/profile',
    },
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
          <IconButton color="secondary" aria-label="settings" component="span">
            <SettingsIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="logout" component="span" onClick={() => navigate('/login')}>
            <LogoutIcon />
          </IconButton>
          <Avatar onClick={() => navigate(config[typeUser].profileUrl)}>MF</Avatar>
        </WrapperButtons>
      </Container>
    </Wrapper>
  );
}

export default Header;
