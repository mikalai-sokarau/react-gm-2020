import { createUseStyles } from 'react-jss';

const style = createUseStyles({
  common: {
    fontFamily: "'Netflix sans', Arial, sans-serif",
    fontSize: '1.1rem',
    color: '#f65261',
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
