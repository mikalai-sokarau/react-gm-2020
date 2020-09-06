import { createUseStyles } from 'react-jss';

const style = createUseStyles({
  moviesAmount: {
    fontSize: '1.25rem',
    margin: '20px 0',
  },
  moviesAmountText: {
    marginLeft: '0.5rem',
    fontWeight: 100,
    fontSize: '1.2rem',
  },
  moviesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 330px)',
    gridRowGap: '1.5rem',
    justifyContent: 'space-between',
  },
});

export default style;
