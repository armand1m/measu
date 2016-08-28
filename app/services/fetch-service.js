export default function fetchService(route, method, body = {}) {
  var props = {
    method,
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };
  
  if (method !== 'GET')
    props.body = JSON.stringify(body);

  return fetch(route, props).then(response => response.json());
};