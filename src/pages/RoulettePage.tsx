import styles from './PageStyles';
import { useState } from 'react';
import { family } from '@/constants/family';
import { Roulette } from './Roulette';

const RoulettePage = () => {
  const [target, setTarget] = useState<string[]>(family);
  const [targetStr, setTargetStr] = useState<string>(target.join());

  const setTargetlst = (newTargetStr: string) => {
    setTargetStr(newTargetStr);
    setTarget(newTargetStr.split(',').map(t => t.trim()).filter(t => t!==''));
  }

  return (
    <div style={styles.pageWrap}>
      <div style={styles.pageInnerWrap}>
        <div
          style={{ height: '200px' }}
        >
          <textarea name="" id="" cols={30} rows={10} value={targetStr} onChange={(e) => {setTargetlst(e.target.value)}} style={{resize: 'none', width: '100%', height: '200px'}}></textarea>
        </div>
        <Roulette target={target}/>
      </div>
    </div>
  );
};

export default RoulettePage;
