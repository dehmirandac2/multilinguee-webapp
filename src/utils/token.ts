import jwt_decode from 'jwt-decode';

interface DecodedToken {
  id?: string;
}

const getDecodedToken = () => {
  const token = window.localStorage.getItem('token');
  return token ? (jwt_decode(token) as DecodedToken) : {};
};

export default getDecodedToken;
