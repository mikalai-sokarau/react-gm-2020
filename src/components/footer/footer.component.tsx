import React, { FC } from 'react';
import withStyles from 'react-jss';
import Logo from '@app/components/logo/logo.component';
import style from '@app/components/footer/footer.component.style';

const Footer: FC<{classes: { [key: string]: string }}> = ({ classes }) => (
  <footer className={classes.footer}>
    <Logo />
  </footer>
);

export default withStyles(style)(Footer);
