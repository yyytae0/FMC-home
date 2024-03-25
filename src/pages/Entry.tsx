import styles from './PageStyles';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.pageWrap}>
      <div style={styles.pageInnerWrap}>
        <h1>우리가 남이가</h1>
        <div
          onClick={() => {
            navigate('/roulette');
          }}
        >
          룰렛
        </div>
      </div>
    </div>
  );
};

export default Entry;
