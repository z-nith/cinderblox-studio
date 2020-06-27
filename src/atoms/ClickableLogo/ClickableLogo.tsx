import React from 'react';
import { Typography, TypographyProps } from '@material-ui/core';
import { Link } from 'atoms';
import { Home } from 'config/Nav';
import clsx from 'clsx';
import useStyles from './styles';

const ClickableLogo = (props: ClickableLogoProps) => {
    const { logoColor, ...rest } = props;
    const classes = useStyles();

    return (
        <Link underline={'none'} href={Home.href} external={false} variant={'wrapper'}>
            <Typography
                className={clsx(classes.title, classes[`${logoColor}Logo`])}
                {...rest}
            >
                CinderBlox
            </Typography>
        </Link>
    );
};

ClickableLogo.defaultProps = {
    logoColor: 'white',
    variant: 'h6',
};

export type ClickableLogoProps = TypographyProps & {
    logoColor: 'white' | 'primary' | 'secondary' | 'black';
};

export default ClickableLogo;
