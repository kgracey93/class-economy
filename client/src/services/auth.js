import axios from 'axios';

const signup = (username, password, firstName, lastName, email, role) => {
  return axios
  .post('/api/auth/signup', { username, password, firstName, lastName, email, role })
  .then(response => {
    // console.log(response.data)
    return response.data
  })
  .catch(err => {
    return err.response.data
  });
}

const login = (username, password) => {
  return axios
  .post('/api/auth/login', { username, password })
  .then(response => response.data )
  .catch(err => err.response.data );
}

const logout = () => {
  return axios
  .delete('/api/auth/logout')
  .then(response => response.data )
  .catch(err => err.response.data );
}

export { signup, login, logout };