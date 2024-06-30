const query = (url: string, method = 'GET', body = {}, headers = {}) => {
  const options: any = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Fetch Error: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => console.error('Fetch Error:', error));
}


export default query;
