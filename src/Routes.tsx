import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
