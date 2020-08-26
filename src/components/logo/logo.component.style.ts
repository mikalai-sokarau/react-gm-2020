import { createUseStyles } from 'react-jss';
import { pearch } from '@app/style/variables/colors';

const style = createUseStyles({
  common: {
    fontSize: '1.1rem',
    color: pearch,
    userSelect: 'none',
  },
  firstPart: {
    fontWeight: 900,
    letterSpacing: '0.2px',
    marginRight: '1px',
  },
  lastPart: {
    fontWeight: 500,
    letterSpacing: '0.8px',
  },
});

export default style;
