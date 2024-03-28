import styles from "./RoomStyle";
import { room } from "@/types/socket";

interface props {
  room: room;
  joinRoom: Function;
}


const Room = ({room, joinRoom}: props) => {
  return (
    <div style={{...styles.container, backgroundColor: false?'#E3E3E3':'#ffffffd0'}} onClick={() => {joinRoom({roomId: room.id})}}>
      <div>
        <div style={styles.title}>{room.roomName}</div>
        <div style={styles.range}>{room.range[0]} ~ {room.range[1]}</div>
        <div style={styles.detailWrap}>
          <div>{room.nickname}</div>
          <div>{room.now}/{room.max}</div>
        </div>
      </div>
    </div>
  )
}

export default Room;