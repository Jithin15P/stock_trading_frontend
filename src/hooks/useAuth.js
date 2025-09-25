import { useContext } from 'react';
import AuthContext from '../context/AuthContext'; // We will use the context here

// This custom hook is a simple shortcut to access the AuthContext
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;