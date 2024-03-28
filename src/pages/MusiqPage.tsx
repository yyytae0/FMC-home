import styles from "./PageStyles";
import useSocket from "@/hooks/useSocket";
import { useEffect } from "react";
import { MusiqPlayTemplate, MusiqWaitTemplate } from "./Musiq";

const MusiqPage = () => {
  const {rooms, users, createRoom, joinRoom, leaveRoom, connect, room} = useSocket({name: 'test'});

  useEffect(() => {
    connect();
  }, [])

  return (
    <div style={styles.pageWrap}>
      <div style={{...styles.pageInnerWrap, background: 'linear-gradient(#C4D9E3, #E3ECF1)'}}>
        {
          room ? (
            <MusiqPlayTemplate room={room} leaveRoom={leaveRoom}/>
          ) : (
            <MusiqWaitTemplate rooms={rooms} users={users} createRoom={createRoom} joinRoom={joinRoom}/>
          )
        }
      </div>
    </div>
  )
}

export default MusiqPage;