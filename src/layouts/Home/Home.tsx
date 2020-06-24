import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { AppBar, Button, ListItemCounter, ScrollToTopButton, Typography } from 'atoms';
import { ExternalLink, GitHub } from 'react-feather';
//import CloudLarge from '../../../public/img/large_cloud.svg';
import AppFrame from '../../../public/img/AppFrame.svg';
import useStyles from './styles';
import ContentMarginContianer from 'atoms/ContentMarginContainer';
import { Nav } from 'organisms';

const Home = (props: HomePropTypes) => {
    const classes = useStyles();

    const renderHowItWorks = () => {
        return (
            <div
                style={{
                    maxWidth: '525px',
                }}
            >
                <List
                    component={'ol'}
                    subheader={<Typography variant={'h4'}>How it works</Typography>}
                >
                    <ListItem alignItems={'flex-start'} disableGutters>
                        <ListItemAvatar>
                            <ListItemCounter count={1} />
                        </ListItemAvatar>
                        <ListItemText
                            primaryTypographyProps={{
                                color: 'textSecondary',
                            }}
                            primary={
                                'Culpa aliquid quos vel totam quia sequi voluptates fuga sunt. Amet ut possimus dolor maxime dolor sunt ipsum. Id error possimus veniam sed doloribus.'
                            }
                        />
                    </ListItem>

                    <ListItem alignItems={'flex-start'} disableGutters>
                        <ListItemAvatar>
                            <ListItemCounter count={2} />
                        </ListItemAvatar>
                        <ListItemText
                            primaryTypographyProps={{
                                color: 'textSecondary',
                            }}
                            primary={
                                'Culpa aliquid quos vel totam quia sequi voluptates fuga sunt. Amet ut possimus dolor maxime dolor sunt ipsum. Id error possimus veniam sed doloribus.'
                            }
                        />
                    </ListItem>

                    <ListItem alignItems={'flex-start'} disableGutters>
                        <ListItemAvatar>
                            <ListItemCounter count={3} />
                        </ListItemAvatar>
                        <ListItemText
                            primaryTypographyProps={{
                                color: 'textSecondary',
                            }}
                            primary={
                                'Culpa aliquid quos vel totam quia sequi voluptates fuga sunt. Amet ut possimus dolor maxime dolor sunt ipsum. Id error possimus veniam sed doloribus.'
                            }
                        />
                    </ListItem>
                </List>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingTop: '32px',
                    }}
                >
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        onClick={() => {}}
                        startIcon={<GitHub color="white" size={18} />}
                        paddingRight
                        addGlow
                    >
                        Github
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

    return (
        <React.Fragment>
            <Nav />
            <div className={classes.root}>
                <div
                    style={{
                        //paddingTop: '300px',
                        width: '100%',

                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div>
                        <div
                            style={{
                                width: '100%',

                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {/* <CloudLarge className={classes.testSvg} /> */}

                            <Typography
                                align={'center'}
                                variant={'h1'}
                                className={classes.headerText}
                            >
                                Inspiration in the cloud
                            </Typography>
                            <Typography
                                align={'center'}
                                variant={'body1'}
                                className={classes.headerText}
                            >
                                Build beautiful color palettes for your next project using
                                images
                            </Typography>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: '32px',
                            }}
                        >
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
                        <AppFrame className={classes.testSvg} />
                    </div>
                </div>
            </div>

            <ContentMarginContianer className={classes.addMarginBottom}>
                <div
                    style={{
                        minHeight: '1400px',
                        width: '100%',
                    }}
                ></div>
                <Typography variant={'h4'} color={'textPrimary'}>
                    This is some primary text
                </Typography>
                <Typography variant={'body1'} color={'textSecondary'}>
                    This is some secondary text
                </Typography>
                {renderHowItWorks()}
                <ScrollToTopButton {...props} />
            </ContentMarginContianer>
        </React.Fragment>
    );
};

export type HomePropTypes = {};

export default Home;
