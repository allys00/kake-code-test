import { useEffect, useState } from "react";
import {
  WebSocketEmitEvent,
  WebSocketInstance,
  WebSocketOnEvent,
} from "../websocket";
import useCountStore from "../store/count/useCountStore";

export const useWebsocket = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    WebSocketInstance.connect();

    WebSocketInstance.on(WebSocketOnEvent.CONNECT, () => {
      setConnected(true);
    });

    WebSocketInstance.on(WebSocketOnEvent.DISCONNECT, () => {
      setConnected(false);
    });

    WebSocketInstance.on(WebSocketOnEvent.COLLECT_COUNTS, () => {
      WebSocketInstance.emit(
        WebSocketEmitEvent.SEND_COUNT,
        useCountStore.getState().count?.toString()
      );
    });

    return () => {
      WebSocketInstance.disconnect();
    };
  }, []);

  return { connected };
};
