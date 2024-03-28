import { useEffect, useState } from "react";
import { Slider, RangeSlider } from "@mantine/core";


interface props {
  createRoom: Function;
}


const CreateRoomModal = ({createRoom}: props) => {
  const [roomName, setRoomName] = useState<string>('');
  const [max, setMax] = useState<number>(6);
  const [range, setRange] = useState<[number, number]>([1990, 2024]);
  const [total, setTotal] = useState<number>(30);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    return
  }

  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid black', padding: '20px', backgroundColor: 'white', borderRadius: '20px'}} onClick={handleClick}>
      <div style={{display: 'flex', flexDirection: 'column', minWidth: '250px', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{textAlign: 'left', width: '100%'}}>방이름</div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <input type="text" value={roomName} onChange={(e) => {setRoomName(e.target.value)}} style={{width: '100%'}} placeholder="아무나 들어와"/>
        </div>
        <div style={{textAlign: 'left', width: '100%'}}>출제 년도 : {range[0]} ~ {range[1]}</div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <RangeSlider style={{width: '100%'}} value={range} onChange={setRange} min={1990} max={2024}/>
        </div>
        <div style={{textAlign: 'left', width: '100%'}}>문제 수</div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{flexGrow: 1, display: 'flex', alignItems: 'center', marginRight: '10px'}}>
            <Slider value={total} onChange={setTotal} style={{width: '100%'}} min={1} max={50}/>
          </div>
          <div style={{width: '40px'}}>
            <input type="number" value={total} style={{width: '100%'}} onChange={(e) => {setTotal(e.target.valueAsNumber)}}/>
          </div>
        </div>
        <div style={{textAlign: 'left', width: '100%'}}>최대 인원</div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{flexGrow: 1, display: 'flex', alignItems: 'center', marginRight: '10px'}}>
            <Slider value={max} onChange={setMax} style={{width: '100%'}} min={1} max={20}/>
          </div>
          <div style={{width: '40px'}}>
            <input type="number" value={max} style={{width: '100%'}} onChange={(e) => {setMax(e.target.valueAsNumber)}}/>
          </div>
        </div>
        <div>
          <button onClick={() => {createRoom({roomName: roomName, max: max, range: range, total: total})}}>생성</button>
        </div>
      </div>
    </div>
  )
}

export default CreateRoomModal;