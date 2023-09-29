import { useRoom } from "../context/RoomContext";
import socket from "../socket";

function useSocketEventListeners() {
  const {
    setRoom
  } = useRoom()

  socket.on('messageinserted', (room) => {
    setRoom(room)
  });
}

export default useSocketEventListeners