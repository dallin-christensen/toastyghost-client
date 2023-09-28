import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8082';

const socket = io(URL, {
  autoConnect: false
});

export default socket