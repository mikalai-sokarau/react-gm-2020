import { createUseStyles } from 'react-jss';
import { gray, white, peachy } from '@app/style/variables/colors';

const style = createUseStyles({
  option: {
    fontWeight: 100,
    padding: '5px 0 5px 15px',
    textTransform: 'uppercase',

    '&:hover': {
      color: peachy,
      cursor: 'pointer',
    },

    '&:focus': {
      outline: 'none',
    },
  },
  dropdownContainer: {
    display: 'inline-block',

    '&:hover ul': {
      display: 'block',
    },
  },
  dropdownTitle: {
    backgroundColor: gray.tint3,
    border: '1px solid transparent',
    width: '150px',
    height: '25px',
    color: white,
    backgroundImage:
      `linear-gradient(45deg, transparent 50%, ${peachy} 50%),
       linear-gradient(135deg, ${peachy} 50%, transparent 50%)`,
    backgroundPosition:
      `calc(100% - 15px) 0.5em,
       calc(100% - 10px) 0.5em,
       calc(100% - 2.5em) 0.5em`,
    backgroundSize: '5px 5px, 5px 5px, 1px 1.5em',
    backgroundRepeat: 'no-repeat',
    textTransform: 'uppercase',
    fontWeight: 100,
    display: 'inline-block',
    cursor: 'pointer',
    paddingLeft: '15px',

    '&:hover': {
      color: peachy,
    },

    '&:focus': {
      border: '1px solid transparent',
      color: peachy,
      outline: 'none',

      '& +ul': {
        display: 'block',
      },
    },
  },
  sortTitle: {
    color: white,
    display: 'inline-block',
    fontFamily: 'Montserrat',
    marginRight: '20px',
    textTransform: 'uppercase',
  },
  optionsList: {
    display: 'none',
    margin: 0,
    position: 'absolute',
    width: '160px',
    zIndex: 2,

    '& >li': {
      backgroundColor: gray.tint3,
      color: 'white',
    },
  },
});

export default style;
