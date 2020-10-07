const BASE_URL = 'https://bcv-fe-interview-api.azapata.io/api';

export const fetchPosts = () => {
  return fetch(BASE_URL + '/posts').then(res => res.json());
}

export const fetchUsers = () => {
  return fetch(BASE_URL + '/users').then(res => res.json());
}

export const fetchProperties = () => {
  return fetch(BASE_URL + '/properties').then(res => res.json());
}
