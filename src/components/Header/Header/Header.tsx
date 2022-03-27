import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { Wrapper, Container, WrapperButtons, Avatar } from './styles';

function Header() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <a href="#" onClick={() => navigate('/')}>
          <img src="/images/logo-multilinguee.png" width="250" alt="Multilinguee logo" />
        </a>
        <WrapperButtons>
          <IconButton color="secondary" aria-label="upload picture" component="span">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="upload picture" component="span">
            <SettingsIcon />
          </IconButton>
          <Avatar>H</Avatar>
        </WrapperButtons>
      </Container>
    </Wrapper>
  );
}

export default Header;
