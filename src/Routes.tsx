import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './pages/create-user';
import Login from './pages/login';

import ListTutors from './pages/student/list-tutors';
import AddTutorInfo from './pages/add-tutor-info';
import StudentProfile from './pages/student/profile';
import TutorProfile from './pages/tutor/profile';

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/add-tutor-info/:id" element={<AddTutorInfo />} />

        <Route path="/student/list-tutors" element={<ListTutors />} />
        <Route path="/student/profile" element={<StudentProfile />} />

        <Route path="/tutor/profile" element={<TutorProfile />} />
      </Routes>
    </Router>
  );
}
