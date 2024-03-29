import { roomInfo } from "@/types/socket";
import recordImg from '@/assets/images/record_disc.png'
import { useState } from "react";
import YouTube from "react-youtube";

interface props {
  room: roomInfo;
  leaveRoom: Function;
}

const Mobile = ({room, leaveRoom}: props) => {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <div style={{width: '100%', height: '100%'}}>
        <YouTube videoId="7ijwiqxvKVc" id='yt'/>
        <div style={{height: '50%', display: 'flex', flexDirection: 'column'}}>
          <div style={{height: '50px', padding: '5px'}}>
            <div style={{color: 'white', fontSize: '18px', fontWeight: 'bold'}}>{room.roomName}</div>
            <div style={{fontSize: '12px', fontWeight: '600', transform: 'translate(0, -5px)'}}>{room.range[0]} ~ {room.range[1]}</div>
          </div>
          <div style={{flexGrow: 1}}>
            <div style={{height: '70%', display: 'flex', flexDirection: 'column'}}>
              <div style={{height: '25px'}}>timer</div>
              <div style={{flexGrow: 1, backgroundImage: `url(${recordImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div>
            </div>
            <div style={{height: '30%'}}>
              <div>가수: 아이유</div>
              <div>제목: ㅅㅁㄴ</div>
            </div>
          </div>
        </div>
        <div style={{height: '50%', border: '1px solid black'}}>
          <div style={{border: '1px solid yellow'}}>
            채팅
          </div>
          <div style={{position: 'fixed', bottom: 0, width: '100%', border: '1px solid black'}}>
            <input type="text" name="" id="" style={{width: '100%'}}/>
          </div>
        </div>
      </div>
      {/* <button onClick={() => {leaveRoom({roomId: room.id})}}>방 나가기</button>
      <div>
        {room.players.length}
      </div> */}
    </div>
  )
}

export default Mobile;