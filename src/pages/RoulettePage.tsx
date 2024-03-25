import styles from './PageStyles';
import { useState } from 'react';
import { family } from '@/constants/family';
import { Roulette } from './Roulette';

const RoulettePage = () => {
  const [target] = useState<string[]>(family);

  return (
    <div style={styles.pageWrap}>
      <div style={styles.pageInnerWrap}>
        <div
          style={{ height: '200px' }}
        >
          {/* 명단 */}
        </div>
        <Roulette target={target}/>
      </div>
    </div>
  );
};

export default RoulettePage;
