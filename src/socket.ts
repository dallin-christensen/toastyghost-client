import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === 'production' ? 'https://toastyghost-server.onrender.com' : 'http://localhost:8082';

const socket = io(URL, {
  autoConnect: false,
  withCredentials: true,
});

export default socket