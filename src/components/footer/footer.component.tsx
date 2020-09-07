import React, { FC } from 'react';
import style from '@app/components/footer/footer.component.style';
import Logo from '@app/components/logo/logo.component';

const Footer: FC<Record<string, unknown>> = () => {
  const { footer } = style();

  return (
    <footer className={footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
