import closeButtonStyles from '@app/style/icons/icons';
import { gray } from '@app/style/variables/colors';
import { createUseStyles } from 'react-jss';

const deleteMovieCloseButtonStyles = {
  ...closeButtonStyles,
  right: '20px',
  top: '15px',
  transform: 'scale(2)',
};

const style = createUseStyles({
  closeButton: deleteMovieCloseButtonStyles,
  modalTile: {
    backgroundColor: gray.tint4,
    borderRadius: '8px',
    height: '280px',
    paddingTop: '2.5rem',
    paddingLeft: '3.5rem',
    position: 'relative',
    width: '600px',

    '& > h2': {
      fontSize: '2.5rem',
      fontWeight: 100,
      margin: 0,
      textTransform: 'uppercase',
    },

    '& > p': {
      fontWeight: 100,
      fontSize: '1.2rem',
    },
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '40px',
    right: '40px',
  },
});

export default style;
