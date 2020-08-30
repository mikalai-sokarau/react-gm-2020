import { createUseStyles } from 'react-jss';
import { peachy, gray, white } from '@app/style/variables/colors';

const sizes = {
  mediumHeight: '60px',
  mediumWidth: '180px',

  largeHeight: '3rem',
};

const style = createUseStyles({
  button: {
    border: '1px solid',
    borderRadius: '5px',
    textTransform: 'uppercase',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  add: {
    border: '1px solid transparent',
  },
  search: {

  },
  reset: {
    backgroundColor: gray.tint3,
    borderColor: peachy,
    color: peachy,
    height: sizes.mediumHeight,
    width: sizes.mediumWidth,
    fontSize: '1.4rem',

    '&:focus': {
      borderColor: white,
      color: white,
    },

    '&:hover': {
      backgroundColor: peachy,
      color: white,
    },
  },
  submit: {
    backgroundColor: peachy,
    borderColor: peachy,
    color: white,
    height: sizes.mediumHeight,
    width: sizes.mediumWidth,
    fontSize: '1.4rem',

    '&:hover': {
      backgroundColor: white,
      color: peachy,
    },
  },
});

export default style;
