import { roomInfo } from "@/types/socket";
import { useMediaQuery } from "react-responsive";
import Web from "./View/Web/Web";
import Mobile from "./View/Mobile/Mobile";

interface props {
  room: roomInfo;
  leaveRoom: Function;
}

const Play = ({room, leaveRoom}: props) => {
  const isMobile = useMediaQuery({query: '(max-width: 800px)'});
  return (
    <>
      {isMobile && <Mobile room={room} leaveRoom={leaveRoom}/>}
      {!isMobile && <Web/>}
      {/* <button onClick={() => {leaveRoom({roomId: room.id})}}>방 나가기</button>
      <div>
        {room.players.length}
      </div> */}
    </>
  )

}

export default Play;