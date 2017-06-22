const baseUrl = 'https://erodionov-adidas-fake-api.now.sh/';

export const get = url => fetch(baseUrl + url).then(r => r.json());

export const post = (url, data) =>
  fetch(baseUrl + url, { method: 'POST', body: JSON.stringify(data) }).then(r => r.json());

export const put = (url, data) =>
  fetch(baseUrl + url, { method: 'PUT', body: JSON.stringify(data) }).then(r => r.json());

export const del = url => fetch(baseUrl + url, { method: 'DELETE' }).then(r => r.json());
