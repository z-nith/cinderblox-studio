import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    useTheme,
} from '@material-ui/core';
import { AppBar, Button, ListItemCounter, ScrollToTopButton, Typography } from 'atoms';
import React from 'react';
import { ExternalLink, GitHub } from 'react-feather';
import useStyles from './styles';
//import CloudLarge from '../../../public/img/large_cloud.svg';

const Home = (props: HomePropTypes) => {
    const classes = useStyles();

    const theme = useTheme();

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
            <AppBar />
            <div className={classes.root}>
                <div
                    style={{
                        paddingTop: '300px',
                    }}
                >
                    {/* <CloudLarge className={classes.testSvg} /> */}
                    <Typography variant={'h1'}>Light theme</Typography>
                    <div
                        style={{
                            minHeight: '1400px',
                            width: '100%',
                        }}
                    ></div>
                </div>
            </div>
            {renderHowItWorks()}
            <ScrollToTopButton {...props} />
        </React.Fragment>
    );
};

export type HomePropTypes = {};

export default Home;
