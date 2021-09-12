import { setContext } from '@apollo/link-context';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authtoken');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

export default authLink;
