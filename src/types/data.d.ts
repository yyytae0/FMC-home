export interface createRoomData {
  roomName: string;
  max: number;
  range: [number, number];
  total: number;
}

export interface joinRoomData {
  roomId: string;
}

export interface leaveRoomData {
  roomId: string;
}