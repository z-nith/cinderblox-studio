import React from 'react';
import { Button, Typography } from 'atoms';
import { ExternalLink } from 'react-feather';
import { ParallaxBanner } from 'react-scroll-parallax';
import AppFrame from '../../../public/img/AppFrame.svg';
import CloudLarge from '../../../public/img/large_cloud.svg';
import SmallCloud from '../../../public/img/short_cloud.svg';
import useStyles from './styles';

const LandingHeader = (props: LandingHeaderPropTypes) => {
    const classes = useStyles();

    const renderCTA = () => {
        return (
            <div className={classes.ctaContainer}>
                <Typography
                    align={'center'}
                    variant={'h1'}
                    className={classes.headerText}
                >
                    Inspiration in the cloud
                </Typography>
                <Typography align={'center'} variant={'body1'}>
                    Build beautiful color palettes for your next project using images
                </Typography>

                <div className={classes.buttonGroupContainer}>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        onClick={() => {}}
                        paddingRight
                    >
                        Get Started
                    </Button>
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        onClick={() => {}}
                        startIcon={<ExternalLink color="black" size={18} />}
                    >
                        Learn more
                    </Button>
                </div>
            </div>
        );
    };

    /**
     * NOTE: The use window.innerHeight is needed to prevent jerking motion
     * of animated clouds via parallax. Because of this, this component
     * must be used in tandem with noSSR to prevent rendering issues
     */
    return (
        <ParallaxBanner
            className={classes.root}
            style={{
                height: `${window.innerHeight}px`,
            }}
            layers={[
                {
                    children: (
                        <div className={classes.appFrameContainer}>
                            <AppFrame className={classes.appFrame} />
                        </div>
                    ),
                    amount: 0.05,
                },
                {
                    children: <SmallCloud className={classes.cloudLeft} />,
                    amount: -0.7,
                },
                {
                    children: <CloudLarge className={classes.cloudBottomRight} />,
                    amount: -0.8,
                },
                {
                    children: <SmallCloud className={classes.cloudTopRight} />,
                    amount: -0.15,
                },
            ]}
        >
            <div className={classes.ctaOuterContainer}>{renderCTA()}</div>
        </ParallaxBanner>
    );
};

export type LandingHeaderPropTypes = {};

export default LandingHeader;
