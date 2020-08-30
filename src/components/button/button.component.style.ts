import { createUseStyles } from 'react-jss';
import { peachy, gray, white } from '@app/style/variables/colors';

const sizes = {
  height: '60px',
  mediumWidth: '180px',
  largeWidth: '240px',
};

const style = createUseStyles({
  button: {
    border: '1px solid',
    borderRadius: '5px',
    fontSize: '1.4rem',
    textTransform: 'uppercase',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  add: {
    border: '1px solid transparent',
  },
  search: {
    backgroundColor: peachy,
    borderColor: peachy,
    color: white,
    height: sizes.height,
    width: sizes.largeWidth,

    '&:hover': {
      backgroundColor: white,
      color: peachy,
    },
  },
  reset: {
    backgroundColor: gray.tint3,
    borderColor: peachy,
    color: peachy,
    height: sizes.height,
    width: sizes.mediumWidth,

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
    height: sizes.height,
    width: sizes.mediumWidth,

    '&:hover': {
      backgroundColor: white,
      color: peachy,
    },
  },
});

export default style;
