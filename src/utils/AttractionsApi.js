const api = process.env.REACT_APP_ATTR_API_URL || 'http://localhost:5002'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () =>
  fetch(`${api}/attractions`, { headers })
    .then(res => res.json())
    .then(data => data.attractions)

export const remove = (attraction) =>
  fetch(`${api}/attractions/${attraction.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.attraction)

export const create = (body) =>
  fetch(`${api}/attractions`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())


  