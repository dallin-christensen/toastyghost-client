import { useEffect, useState } from "react";
import socket from "../socket";

function useSocketConnect() {
  const [socketConnected, setSocketConnected] = useState<boolean>(socket.connected);

  useEffect(() => {
    function onConnect() {
      console.log('socket connected')
      setSocketConnected(true);
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