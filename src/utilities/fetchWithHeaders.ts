type BodyType = {
  [key: string]: unknown
}

function fetchWithHeaders(url: string, body: BodyType, method?: string) {
  return fetch(url, {
    method: method ?? "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .catch((err) => {
    console.error(err);
  })
}

export default fetchWithHeaders