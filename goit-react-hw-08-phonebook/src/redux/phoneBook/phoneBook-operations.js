import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './phoneBook-actions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)));

  // try {
  //   const { data } = axios.get('/contacts');

  //   dispatch(fetchContactSuccess(data));
  // } catch (error) {
  //   dispatch(fetchContactError(error));
  // }
};

const addContact = (name, number) => async (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));

  // const contact = { name, number };

  // dispatch(addContactRequest());

  // try {
  //   const { data } = axios.post('/contacts', contact);

  //   dispatch(addContactSuccess(data));
  // } catch (error) {
  //   dispatch(addContactError(error));
  // }
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

const operations = {
  addContact,
  deleteContact,
  fetchContacts,
};

export default operations;
