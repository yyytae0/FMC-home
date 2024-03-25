import { useRef, useState, useEffect } from 'react';
import { getRandomColor } from '@/utils/color';
import ArrowIcon from '@/components/ArrowIcon';

interface props {
  target: string[];
}

const Roulette = ({ target }: props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [picked, setPicked] = useState<string>('');

  const newMake = () => {
    setPicked('');
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    ctx.reset();
    const [cw, ch] = [canvasRef.current.width / 2, canvasRef.current.height / 2];
    const arc = Math.PI / (target.length / 2);

    for (let i = 0; i < target.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = getRandomColor();
      ctx.moveTo(cw, ch);
      ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
      ctx.fill();
      ctx.closePath();
    }

    ctx.textAlign = 'center';
    ctx.fillStyle = '#fff';
    ctx.font = '50px sans-serif';

    for (let i = 0; i < target.length; i++) {
      const angle = arc * i + arc / 2;

      ctx.save();
      ctx.translate(cw + Math.cos(angle) * (cw - 50), ch + Math.sin(angle) * (ch - 50));
      ctx.rotate(angle + Math.PI / 2);

      target[i].split(' ').forEach((text, j) => {
        ctx.fillText(text, 0, 30 * j + 30);
      });

      ctx.restore();
    }
  };

  const rotate = () => {
    setPicked('');
    if (!canvasRef.current) return;
    canvasRef.current.style.transform = 'initial';
    canvasRef.current.style.transition = 'initial';

    setTimeout(() => {
      if (!canvasRef.current) return;
      const ran = Math.floor(Math.random() * target.length);
      const arc = 360 / target.length;
      const rotate = 3600 - 90 - ((ran * arc) + arc / 2);  // 회전수(10회) - 시작점 12시방향으로 설정 - (당첨 인덱스의 각도만큼 이동) - 당첨인덱스의 가운데로 위치
      console.log(ran, arc, rotate)
      canvasRef.current.style.transform = `rotate(${rotate}deg)`;
      canvasRef.current.style.transition = '2s';
      setTimeout(() => {
        setPicked(target[ran]);
      }, 2000);
    }, 1);
  };

  useEffect(() => {
    newMake();
  }, [target]);

  return (
    <div>
      <div style={{marginBottom: '30px'}}>
        당첨 {picked}

      </div>
      <div style={{ position: 'relative', minWidth: '300px' }}>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '-30px',
            width: '50px',
            height: '50px',
            zIndex: 1,
            rotate: '180deg',
            transform: 'translate(50%, 0%)',
          }}
        >
          <ArrowIcon />
        </div>
        <canvas ref={canvasRef} width="1200px" height="1200px" style={{ transition: '2s', width: '300px', height: '300px' }} />
        <div>
          <button
            onClick={() => {
              rotate();
            }}
            style={{zIndex: 1, position: 'relative'}}
          >
            돌리기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
