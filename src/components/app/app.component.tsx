import React from 'react';
import { styles } from './app.component.styles';

export const App = () => {
    const classes = styles();

    return <div className={classes.core}>Hello World!</div>;
}
