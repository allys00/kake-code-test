import { io, Socket } from "socket.io-client";

export enum WebSocketEmitEvent {
  SEND_COUNT = "sendCount",
}

export enum WebSocketOnEvent {
  COLLECT_COUNTS = "collectCounts",
  CONNECT = "connect",
  DISCONNECT = "disconnect",
}

class WebSocket {
  private socket: Socket;

  constructor() {
    this.socket = io("http://localhost:3000");
  }

  public connect() {
    this.socket.connect();
  }

  public disconnect() {
    this.socket.disconnect();
  }

  public on(event: WebSocketOnEvent, callback: (...args: unknown[]) => void) {
    this.socket.on(event, callback);
  }

  public emit(event: WebSocketEmitEvent, data: unknown) {
    this.socket.emit(event, data);
  }
}

export const WebSocketInstance = new WebSocket();
