import { useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const AccessControl = ({ children }: { children: ReactNode }) => {
  const [autheticated, setAuth] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const hasPermission = localStorage.getItem('token');
    if (!hasPermission) {
      navigate('/login');
    } else {
      setAuth(true);
    }
  }, []);

  if (autheticated) {
    return <span>{children}</span>;
  }

  return null;
};

export default AccessControl;
