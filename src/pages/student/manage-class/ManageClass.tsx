import { useMutation, useQuery } from '@apollo/client';

import {
  Container,
  Typography,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loader } from 'graphql.macro';

import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import getDecodedToken from '@utils/token';
import { Button } from './styles';
import { useState } from 'react';

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

  return (
    <>
      <Header typeUser="student" />
      <HeaderAlert />
      <Container>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <div>
              <Typography variant="h4" mt={6} mb={3} gutterBottom>
                Detalhes da sua próxima aula
              </Typography>
              <Typography mb={2} gutterBottom>
                Dia: {new Date(getStudentNextClass?.[0]?.date)?.toLocaleDateString('pt-BR')}
              </Typography>
              <Typography mb={2} gutterBottom>
                Hora de início: {getStudentNextClass?.[0]?.init}
              </Typography>
              <Typography mb={2} gutterBottom>
                Hora do término: {getStudentNextClass?.[0]?.end}
              </Typography>
            </div>
            <Button variant="contained" color="secondary" size="large" onClick={() => navigate('/student/list-tutors')}>
              Ok
            </Button>

            <Button variant="text" size="large" onClick={handleClickOpen}>
              Preciso cancelar
            </Button>

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
