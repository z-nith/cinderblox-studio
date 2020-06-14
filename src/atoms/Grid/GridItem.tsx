import React from 'react';
import { Grid, GridProps } from '@material-ui/core';

const GridItem = (props: GridProps) => {
    return <Grid item {...props} />;
};

export default GridItem;
