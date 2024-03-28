import { room, user } from '@/types/socket';
import { useEffect, useState } from 'react';
import CreateRoomModal from './components/CreateRoomModal';
import Room from './components/Room';

interface props {
  rooms: room[];
  users: user[];
  createRoom: Function;
  joinRoom: Function;
}

const Mobile = ({ rooms, users, createRoom, joinRoom }: props) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      onClick={() => {
        toggle && setToggle(false);
      }}
    >
      <div>{toggle && <CreateRoomModal createRoom={createRoom} />}</div>
      <div style={{position: 'absolute', bottom: '30px', right: '30px'}}>
        <button
          onClick={() => {
            setToggle(true);
          }}
        >
          방만들기
        </button>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', columnGap: '20px', padding: '20px', rowGap: '15px', minWidth: '360px'}}>
        {rooms.map((room, idx) => {
          return (
            <div key={`room${idx}`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Room room={room} joinRoom={joinRoom}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mobile;