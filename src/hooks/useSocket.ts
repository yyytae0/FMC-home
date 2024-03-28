import { io, Socket } from 'socket.io-client';
import { useState } from 'react';
import { createRoomData, leaveRoomData, joinRoomData } from '@/types/data';
import { room, roomInfo, user } from '@/types/socket';


interface props {
  name: string;
}


const useSocket = ({name}: props) => {
  const [socket, setSocket] = useState<Socket>();
  const [rooms, setRooms] = useState<room[]>([
    {id: '1', roomName: '1', max: 5, range: [1990, 2024], now: 3, isPlaying: false, total: 20, nickname: 'nickname'},
    {id: '2', roomName: '2', max: 5, range: [1990, 2024], now: 3, isPlaying: false, total: 20, nickname: 'nickname'},
    {id: '3', roomName: '3', max: 5, range: [1990, 2024], now: 3, isPlaying: false, total: 20, nickname: 'nickname'},
    {id: '4', roomName: '4', max: 5, range: [1990, 2024], now: 3, isPlaying: false, total: 20, nickname: 'nickname'},
    {id: '5', roomName: '5', max: 5, range: [1990, 2024], now: 3, isPlaying: false, total: 20, nickname: 'nickname'},
    {id: '6', roomName: '6', max: 5, range: [1990, 2024], now: 3, isPlaying: false, total: 20, nickname: 'nickname'},
    {id: '7', roomName: '7', max: 5, range: [1990, 2024], now: 3, isPlaying: false, total: 20, nickname: 'nickname'},
    {id: '8', roomName: '8', max: 5, range: [1990, 2024], now: 3, isPlaying: true, total: 20, nickname: 'nickname'},
    {id: '9', roomName: '9', max: 5, range: [1990, 2024], now: 3, isPlaying: true, total: 20, nickname: 'nickname'},
  ]);
  const [users, setUsers] = useState<user[]>([]);
  const [room, setRoom] = useState<roomInfo|null>(null);
  const [nickname] = useState<string>(name);

  const connect = () => {
    const socket = io('http://localhost:3000/');
    setSocket(socket)

    socket.emit('login', {name: '123'});
  
    socket.on('getRooms', (data: room[]) => {
      setRooms(data)
    });

    socket.on('getRoomDetail', (data: roomInfo) => {
      setRoom(data)
    })
  }

  const createRoom = (data: createRoomData) => {
    socket.emit('createRoom', {
      nickname: nickname,
      ...data,
      roomName: data.roomName?data.roomName:'아무나 들어와',
    });
  }

  const joinRoom = (data: joinRoomData) => {
    socket.emit('joinRoom', {
      nickname: nickname,
      ...data
    });
  }

  const leaveRoom = (data: leaveRoomData) => {
    socket.emit('leaveRoom', data);
    setRoom(null);
  }

  return {
    rooms, users, createRoom, joinRoom, leaveRoom, connect, room
  }
};

export default useSocket;
