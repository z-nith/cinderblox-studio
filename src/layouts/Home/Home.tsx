import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, NoSsr } from '@material-ui/core';
import { Button, ListItemCounter, ScrollToTopButton, Typography } from 'atoms';
import ContentMarginContianer from 'atoms/ContentMarginContainer';
import { Footer, LandingHeader, Nav } from 'organisms';
import { ExternalLink, GitHub } from 'react-feather';
import useStyles from './styles';

const Home = (props: HomePropTypes) => {
    const classes = useStyles();

    const renderFooter = () => {
        const footerLinks = [];
        return <Footer />;
    };

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
        <div>
            <Nav />
            <NoSsr>
                <LandingHeader />
            </NoSsr>

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
            {renderFooter()}
        </div>
    );
};

export type HomePropTypes = {};

export default Home;
