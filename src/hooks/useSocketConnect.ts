import { useEffect, useState } from "react";
import socket from "../socket";
import { useParams } from "react-router-dom";
import { useCurrentUser } from "../context/UserContext";

function useSocketConnect() {
  const { roomId = "" } = useParams()
  const { currentUser } = useCurrentUser()
  const [socketConnected, setSocketConnected] = useState<boolean>(socket.connected);

  useEffect(() => {
    function onConnect() {
      console.log('socket connected')
      setSocketConnected(true);
      socket.emit("subscribe", roomId, currentUser?._id);
    }

    function onDisconnect() {
      console.log('socket disconnected')
      setSocketConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.connect();

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.disconnect();
    };
  }, []);

  return {
    socketConnected
  }
}

export default useSocketConnect