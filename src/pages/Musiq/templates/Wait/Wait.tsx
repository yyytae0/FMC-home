import { room, user } from '@/types/socket';
import { useMediaQuery } from 'react-responsive';
import Mobile from './View/Mobile/Mobile';
import Web from './View/Web/Web';

interface props {
  rooms: room[];
  users: user[];
  createRoom: Function;
  joinRoom: Function;
}

const Wait = ({ rooms, users, createRoom, joinRoom }: props) => {
  const isMobile = useMediaQuery({query: '(max-width: 800px)'});

  return (
    <>
      {isMobile && <Mobile rooms={rooms} users={users} createRoom={createRoom} joinRoom={joinRoom}/>}
      {!isMobile && <Web/>}
    </>
  );
};

export default Wait;
