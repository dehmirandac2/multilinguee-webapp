import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './pages/create-user';
import Login from './pages/login';

import ListTutors from './pages/list-tutors';
import AddTutorInfo from './pages/add-tutor-info';
import Profile from './pages/profile';

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/add-tutor-info/:id" element={<AddTutorInfo />} />
        <Route path="/list-tutors" element={<ListTutors />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
