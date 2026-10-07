import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addNewPerson = (newPersonData) => {
  const request = axios.post(baseUrl, newPersonData);
  return request.then((response) => response.data);
};

const deletePerson = (personId) => {
  const request = axios.delete(`${baseUrl}/${personId}`);
  return request.then((response) => response.data);
};

export default {
  getAllPersons,
  addNewPerson,
  deletePerson,
};
