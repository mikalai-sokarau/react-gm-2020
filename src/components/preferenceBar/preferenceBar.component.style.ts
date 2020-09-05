import { createUseStyles } from 'react-jss';
import { white, peachy } from '@app/style/variables/colors';

const style = createUseStyles({
  preferenceBarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem 0',
  },
  preferenceContainer: {
    color: white,
    display: 'flex',
    cursor: 'default',
  },
  preferenceButton: {
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    color: white,
    fontSize: '1.2rem',
    fontWeight: 100,
    marginRight: '20px',
    paddingBottom: '10px',
    textTransform: 'uppercase',

    '&:hover': {
      cursor: 'pointer',
      color: peachy,
    },

    '&:focus': {
      borderBottomColor: peachy,
      outline: 'none',
    },
  },
});

export default style;
