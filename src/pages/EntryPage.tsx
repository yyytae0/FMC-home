import styles from './PageStyles';
import { useNavigate } from 'react-router-dom';

const EntryPage = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.pageWrap}>
      <div style={styles.pageInnerWrap}>
        <h1>우리가 남이가</h1>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <div
            onClick={() => {
              navigate('/roulette');
            }}
            style={styles.routeBadge}
          >
            룰렛
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
