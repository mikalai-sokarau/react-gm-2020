import { createUseStyles } from 'react-jss';
import { darkGradient } from '@app/style/variables/colors';

const style = createUseStyles({
  modalBackground: {
    alignItems: 'center',
    background: `linear-gradient(${darkGradient}, ${darkGradient})`,
    backdropFilter: 'blur(4px)',
    bottom: 0,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 2,
  },
});

export default style;
