import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/create-account';
import Login from './pages/login';

import ListTutors from './pages/list-tutors';

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/list-tutors" element={<ListTutors />} />
      </Routes>
    </Router>
  );
}
