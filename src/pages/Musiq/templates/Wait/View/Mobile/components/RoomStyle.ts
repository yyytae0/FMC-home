const styles = {
  container: {
    width: '100%',
    minWidth: '150px',
    maxWidth: '300px',
    border: '1px solid #79BCD9',
    padding: '10px',
  },
  playing: {
    backgroundColor: '#E3E3E3'
  },
  waiting: {
    backgroundColor: '#ffffff90'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  range: {
    textAlign: 'left' as 'left'
  },
  detailWrap: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between'
  }

}

export default styles