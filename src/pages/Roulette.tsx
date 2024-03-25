import styles from './PageStyles';
import { useLayoutEffect, useRef } from 'react';

const Roulette = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 룰렛에 들어갈 항목
  const product = ['떡볶이', '돈가스', '초밥', '피자', '냉면', '치킨', '족발', '피자', '삼겹살'];

  // 각 항목에 해당하는 색상
  const colors = [
    '#dc0936',
    '#e6471d',
    '#f7a416',
    '#efe61f ',
    '#60b236',
    '#209b6c',
    '#169ed8',
    '#3f297e',
    '#87207b',
    '#be107f',
    '#e7167b',
  ];

  const newMake = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    const [cw, ch] = [canvasRef.current?.width / 2, canvasRef.current?.height / 2];
    const arc = Math.PI / (product.length / 2);

    for (let i = 0; i < product.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = colors[i % (colors.length - 1)];
      ctx.moveTo(cw, ch);
      ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
      ctx.fill();
      ctx.closePath();
    }

    ctx.textAlign = 'center';
    ctx.fillStyle = '#fff';
    ctx.font = '18px bold'

    for (let i = 0; i < product.length; i++) {
      const angle = arc * i + arc / 2;

      ctx.save();

      ctx.translate(cw + Math.cos(angle) * (cw - 50), ch + Math.sin(angle) * (ch - 50));
      ctx.rotate(angle + Math.PI / 2);

      product[i].split(' ').forEach((text, j) => {
        ctx.fillText(text, 0, 30 * j);
      });

      ctx.restore();
    }
  };

  const rotate = () => {
    if (!canvasRef.current) return;
    canvasRef.current.style.transform = 'initial';
    canvasRef.current.style.transition = 'initial';

    setTimeout(() => {
      if (!canvasRef.current) return;
      const ran = Math.floor(Math.random() * product.length);
      const arc = 360 / product.length;
      const rotate = ran * arc + 1800 + arc * 3;
      canvasRef.current.style.transform = `rotate(-${rotate}deg)`;
      canvasRef.current.style.transition = '2s';
    }, 1)
  };

  useLayoutEffect(() => {
    newMake();
  }, [])



  return (
    <div style={styles.pageWrap}>
      <div style={styles.pageInnerWrap}>
        <div style={{ height: '200px' }} onClick={()=>{rotate()}}>룰렛</div>
        <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', left: '50%', top: '-5%', width: '5px', height: '20px', backgroundColor: 'black'}}></div>
          <canvas ref={canvasRef} width='300px' height='300px' style={{transition: '2s'}}/>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
