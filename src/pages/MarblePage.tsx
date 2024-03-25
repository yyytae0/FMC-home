import styles from './PageStyles';

const MarblePage = () => {
  return (
    <div style={styles.pageWrap}>
      <div style={styles.pageInnerWrap}>
        <iframe src="https://roulette-theta-three.vercel.app/" frameBorder="0" width='100%' height='100%'></iframe>
      </div>
    </div>
  )
}

export default MarblePage;