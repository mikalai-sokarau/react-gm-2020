import { createUseStyles } from 'react-jss';
import {
  peachy,
  gray,
  white,
  transparent,
} from '@app/style/variables/colors';

const sizes = {
  mediumWidth: '180px',
  largeWidth: '240px',
};

const focus = {
  borderColor: white,
  color: white,
};

const style = createUseStyles({
  button: {
    border: '1px solid',
    borderRadius: '5px',
    fontSize: '1.4rem',
    height: '60px',
    textTransform: 'uppercase',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  add: {
    backgroundColor: transparent.gray,
    borderColor: 'transparent',
    color: peachy,
    height: '50px',
    width: '175px',
    fontSize: '1.25rem',

    '&:focus': focus,
    '&:hover': {
      borderColor: white,
      color: white,
    },
  },
  search: {
    backgroundColor: peachy,
    borderColor: peachy,
    color: white,
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
    width: sizes.mediumWidth,

    '&:focus': focus,
    '&:hover': {
      backgroundColor: peachy,
      color: white,
    },
  },
  submit: {
    backgroundColor: peachy,
    borderColor: peachy,
    color: white,
    width: sizes.mediumWidth,

    '&:hover': {
      backgroundColor: white,
      color: peachy,
    },
  },
});

export default style;
