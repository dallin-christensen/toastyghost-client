import { useNavigate } from "react-router-dom";
import { useRoom } from "../context/RoomContext";
import socket from "../socket";

function useSocketEventListeners() {
  const navigate = useNavigate();
  const {
    setRoom
  } = useRoom()

  socket.on('messageinserted', (room) => {
    setRoom(room)
  });

  socket.on('joinedroom', (room) => {
    // TODO display who joined?
    setRoom(room)
  });

  socket.on('leftroom', (room) => {
    // TODO display toast of who left room
    setRoom(room)
  });

  socket.on('roomdeleted', () => {
    // TODO display toast
    navigate("/")
  });
}

export default useSocketEventListeners