import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loader } from 'graphql.macro';

import { Wrapper } from './styles';
import { useQuery } from '@apollo/client';
import getDecodedToken from '@utils/token';

const GET_STUDENT_NEXT_CLASS = loader('../../../queries/getStudentNextClass.gql');

function HeaderAlert() {
  const navigate = useNavigate();
  const { id: studentId } = getDecodedToken();

  const { data } = useQuery(GET_STUDENT_NEXT_CLASS, {
    variables: { studentId: studentId?.toString() },
    fetchPolicy: 'network-only',
  });

  const { getStudentNextClass } = data || {};

  return (
    <Wrapper>
      {getStudentNextClass?.[0] && (
        <Container>
          <Typography color="white" mr={2}>
            Sua próxima aula será no dia: {new Date(getStudentNextClass?.[0]?.date)?.toLocaleDateString('pt-BR')}
          </Typography>
          <Button variant="contained" size="small" onClick={() => navigate('/student/manage-class')}>
            Gerenciar aula
          </Button>
        </Container>
      )}
    </Wrapper>
  );
}

export default HeaderAlert;
