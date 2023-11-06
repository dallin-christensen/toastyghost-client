type BodyType = {
  [key: string]: unknown
}

const DEV_SERVER_PORT = import.meta.env.DEV_SERVER_PORT ?? '8082'

const prependedUrl =
  process.env.NODE_ENV === 'production' ? 'https://server.toastyghost.dev' : `http://localhost:${DEV_SERVER_PORT}`

function fetchWithHeaders(url: string, body: BodyType, method?: string) {
  return fetch(prependedUrl + url, {
    method: method ?? 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error(err)
    })
}

export default fetchWithHeaders
