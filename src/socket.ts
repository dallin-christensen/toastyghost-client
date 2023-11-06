import { io } from 'socket.io-client'

const DEV_SERVER_PORT = import.meta.env.DEV_SERVER_PORT ?? '8082'

const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://toastyghost-server.onrender.com'
    : `http://localhost:${DEV_SERVER_PORT}`

const socket = io(URL, {
  autoConnect: false,
  withCredentials: true,
})

export default socket
