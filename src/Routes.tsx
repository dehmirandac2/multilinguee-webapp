import { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './pages/create-user';
import Login from './pages/login';

import AccessControl from '@components/AccessControl';

import ListTutors from './pages/student/list-tutors';
import AddTutorInfo from './pages/add-tutor-info';
import StudentProfile from './pages/student/profile';
import TutorProfile from './pages/tutor/profile';

import Page404 from './pages/404';

export default function MainRoutes() {
  const accessControl = (component: ReactElement) => {
    return <AccessControl>{component}</AccessControl>;
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/add-tutor-info/:id" element={<AddTutorInfo />} />

        <Route path="/student/list-tutors" element={accessControl(<ListTutors />)} />
        <Route path="/student/profile" element={accessControl(<StudentProfile />)} />

        <Route path="/tutor/profile" element={accessControl(<TutorProfile />)} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
