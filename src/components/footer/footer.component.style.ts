import { createUseStyles } from 'react-jss';
import { gray } from '@app/style/variables/colors';

const style = createUseStyles({
  footer: {
    backgroundColor: gray.tint2,
    height: '80px',
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
