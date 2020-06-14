import React from 'react';
import { Grid, GridProps } from '@material-ui/core';

const GridContainer = (props: GridProps) => {
    return <Grid container {...props} />;
};

export default GridContainer;
