import { peachy } from '@app/style/variables/colors';
import { createUseStyles } from 'react-jss';

const style = createUseStyles({
  common: {
    cursor: 'pointer',
    textDecoration: 'none',

    '& span': {
      fontSize: '2rem',
      color: peachy,
      userSelect: 'none',
    },
  },
  firstPart: {
    fontWeight: 900,
    letterSpacing: '0.2px',
    marginRight: '1px',
  },
  lastPart: {
    fontWeight: 100,
    letterSpacing: '0.8px',
  },
});

export default style;
