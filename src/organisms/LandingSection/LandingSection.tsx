import React from 'react';
import { Paper, GridProps } from '@material-ui/core';
import { GridContainer, GridItem, ContentMarginContainer } from 'atoms';
import clsx from 'clsx';
import useStyles from './styles';

const LandingSection = (props: LandingSectionPropTypes) => {
    const {
        backgroundColor,
        flexRowDirection,
        leftChild,
        rightChild,
        leftGridItemProps,
        rightGridItemProps,
    } = props;
    const classes = useStyles();

    return (
        <Paper
            elevation={0}
            square
            className={clsx(classes.root, classes[`${backgroundColor}Background`])}
        >
            <ContentMarginContainer>
                <GridContainer direction={flexRowDirection}>
                    <GridItem {...leftGridItemProps}>{leftChild}</GridItem>
                    <GridItem {...rightGridItemProps}>{rightChild}</GridItem>
                </GridContainer>
            </ContentMarginContainer>
        </Paper>
    );
};

LandingSection.defaultProps = {
    backgroundColor: 'default',
    flexRowDirection: 'row',
};

export type LandingSectionPropTypes = {
    backgroundColor: 'default' | 'paper';
    flexRowDirection: 'row' | 'row-reverse';
    leftChild: React.ReactNode;
    rightChild: React.ReactNode;
    leftGridItemProps: GridProps;
    rightGridItemProps: GridProps;
};

export default LandingSection;
