import { createUseStyles } from 'react-jss';

const HEADER_HEIGHT = '350px';

const style = createUseStyles({
  header: {
    height: HEADER_HEIGHT,
    background: 'url(assets/images/covers.jpg)',
  },
  headerContainer: {
    height: HEADER_HEIGHT,
    padding: '20px',
  },
  logoContainer: {
    position: 'absolute',
    top: '20px',
  },
  addMovieButtonContainer: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  }
});

export default style;
