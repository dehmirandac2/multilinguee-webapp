import { useQuery } from '@apollo/client';
import Header from '@components/Header/Header';
import HeaderAlert from '@components/Header/HeaderAlert';
import TutorCard from '@components/TutorCard';
import { Typography, Container, Skeleton, Snackbar, Alert } from '@mui/material';
import getDecodedToken from '@utils/token';

import { loader } from 'graphql.macro';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { CardsWrapper, SkeletonWrapper } from './styles';

const GET_TUTORS = loader('../../../queries/getTutors.gql');

interface Tutor {
  id: number;
  name: string;
  surname: string;
  about: string;
  languages: string;
  stars: number;
  totalReviews: number;
  isFavorite: boolean;
}

function ListTutors() {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(search);
  const deleteClassSuccess = queryParams.get('delete-class-success');
  const [showSuccess, setShowSuccess] = useState(false);

  const { id: studentId } = getDecodedToken();
  const { data } = useQuery(GET_TUTORS, { variables: { studentId: studentId?.toString() } });

  useEffect(() => {
    if (deleteClassSuccess) {
      setShowSuccess(true);
      queryParams.delete('delete-class-success');
      setSearchParams(queryParams);
    }
  }, [deleteClassSuccess]);

  return (
    <>
      <Header typeUser="student" />
      <HeaderAlert />
      <Container>
        <Typography variant="h4" mt={6} mb={5} gutterBottom>
          Encontre seu professor
        </Typography>
        <CardsWrapper>
          {data ? (
            data?.getTutors.map((tutor: Tutor) => <TutorCard key={tutor.id} data={tutor} studentId={studentId} />)
          ) : (
            <SkeletonWrapper>
              <Skeleton variant="rectangular" height={180} />
              <Skeleton variant="rectangular" height={180} />
            </SkeletonWrapper>
          )}
        </CardsWrapper>
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert severity="success">Aula cancelada com sucesso</Alert>
        </Snackbar>
      </Container>
    </>
  );
}

export default ListTutors;
