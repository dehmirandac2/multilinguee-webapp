import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { loader } from 'graphql.macro';
import {
  Container,
  Typography,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Avatar,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import NextClass from '@components/NextClass';

import getDecodedToken from '@utils/token';
import { Button, WrapperHeader, Navigation, WrapperProfile } from './styles';

const GET_STUDENT_NEXT_CLASS = loader('../../../queries/getStudentNextClass.gql');
const DELETE_CLASS = loader('../../../queries/deleteClass.gql');

function ManageClass() {
  const navigate = useNavigate();

  const { id: studentId } = getDecodedToken();
  const [showDialog, setShowDialog] = useState(false);

  const handleClickOpen = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const { data, loading } = useQuery(GET_STUDENT_NEXT_CLASS, {
    variables: { studentId: studentId?.toString() },
  });

  const { getStudentNextClass } = data || {};

  const [deleteClass] = useMutation(DELETE_CLASS, {
    variables: { classId: getStudentNextClass?.[0]?.id },
    onCompleted: () => {
      navigate('/student/list-tutors?delete-class-success=true');
    },
  });

  const handleCancelClass = () => {
    deleteClass();
  };

  const { name, surname, id, date, init, end, topic } = getStudentNextClass?.[0] || {};

  return (
    <>
      <Header typeUser="student" />
      <HeaderAlert />
      <Container>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h4" mt={6} mb={3} gutterBottom>
              Gerenciar aula com:
            </Typography>
            <WrapperHeader>
              <WrapperProfile>
                <Avatar sx={{ width: 56, height: 56 }}>
                  <PersonIcon />
                </Avatar>
                <Typography variant="h5" mt={6} mb={5} gutterBottom>
                  {name} {surname}
                </Typography>
              </WrapperProfile>
              <Navigation>
                <Button variant="contained" size="large" onClick={handleClickOpen}>
                  Cancelar aula
                </Button>
              </Navigation>
            </WrapperHeader>

            <NextClass
              tutorId={getStudentNextClass?.[0]?.tutorId}
              currentClass={{
                id,
                date,
                init,
                end,
                topic,
              }}
            />

            <Dialog open={showDialog} onClose={handleClose}>
              <DialogTitle id="alert-dialog-title">{'Cancelar aula'}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">Você precisa mesmo cancelar a aula?</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCancelClass}>Cancelar aula</Button>
                <Button onClick={handleClose} autoFocus>
                  Fechar
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </Container>
    </>
  );
}

export default ManageClass;
