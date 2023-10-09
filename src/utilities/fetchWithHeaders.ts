type BodyType = {
  [key: string]: unknown
}

const prependedUrl = process.env.NODE_ENV === 'production' ? 'https://toastyghost-server.onrender.com' : 'http://localhost:8082'

function fetchWithHeaders(url: string, body: BodyType, method?: string) {
  return fetch(prependedUrl + url, {
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