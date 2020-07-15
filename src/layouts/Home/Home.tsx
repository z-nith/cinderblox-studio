import React from 'react';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import { BaseLink, Button, ListItemCounter, ScrollToTopButton, Typography } from 'atoms';
import { ApiDocs, App, GitHub as ProjectGitHubLink, LearnMore } from 'config/Nav';
import { Footer, LandingHeader, LandingSection, Nav } from 'organisms';
import { Book, ExternalLink, GitHub } from 'react-feather';
import ApiIllustration from '../../../public/img/web_development.svg';
import Analytics from '../../../public/img/innovation_isometric.svg';
import Presentation from '../../../public/img/project_presentation__isometric.svg';
import useStyles from './styles';
import clsx from 'clsx';

const Home = (props: HomePropTypes) => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const renderIntroSection = () => {
        return (
            <LandingSection
                flexRowDirection={'row-reverse'}
                rightChild={<Presentation className={classes.presentation} />}
                rightGridItemProps={{
                    xs: 12,
                    md: 7,
                }}
                leftGridItemProps={{
                    xs: 12,
                    md: 5,
                }}
                leftChild={
                    <div className={classes.textContentContainer}>
                        <Typography
                            variant={'h3'}
                            color={'textPrimary'}
                            align={isMobile ? 'center' : 'left'}
                            gutterBottom
                        >
                            Inspiration through technology
                        </Typography>
                        <Typography
                            variant={'body1'}
                            color={'textSecondary'}
                            gutterBottom
                            className={classes.textDescriptionContainer}
                            align={isMobile ? 'center' : 'left'}
                        >
                            Discover the power of Color Quantization via the Cinderblox
                            Color Studio. By leveraging open-source image analysis tools
                            you can turn a given image into a beautiful color palette for
                            your next creative project!
                        </Typography>
                        <div className={classes.landingSectionCTAButtonContainer}>
                            <Button
                                variant={'contained'}
                                color={'primary'}
                                component={BaseLink}
                                href={App.href}
                                as={App.as}
                            >
                                Find your palette
                            </Button>
                        </div>
                    </div>
                }
            />
        );
    };

    const renderHowItWorks = () => {
        return (
            <LandingSection
                flexRowDirection={'row'}
                backgroundColor={'paper'}
                leftChild={
                    <div className={classes.textContentContainer}>
                        <List
                            component={'ol'}
                            subheader={
                                <Typography variant={'h3'}>How it works</Typography>
                            }
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
                                component={'a'}
                                href={ProjectGitHubLink.href}
                                startIcon={<GitHub color="white" size={18} />}
                                paddingRight
                                addGlow
                            >
                                {ProjectGitHubLink.displayText}
                            </Button>
                            <Button
                                variant={'contained'}
                                color={'secondary'}
                                component={'a'}
                                href={LearnMore.href}
                                startIcon={<ExternalLink color="black" size={18} />}
                            >
                                {LearnMore.displayText}
                            </Button>
                        </div>
                    </div>
                }
                leftGridItemProps={{
                    xs: 12,
                    md: 6,
                }}
                rightChild={<Analytics className={classes.presentation} />}
                rightGridItemProps={{
                    xs: 12,
                    md: 6,
                }}
            />
        );
    };

    const renderApiSection = () => {
        return (
            <LandingSection
                flexRowDirection={'row-reverse'}
                rightChild={
                    <ApiIllustration
                        className={clsx(classes.presentation, classes.apiIllustration)}
                    />
                }
                rightGridItemProps={{
                    xs: 12,
                    md: 7,
                }}
                leftGridItemProps={{
                    xs: 12,
                    md: 5,
                }}
                leftChild={
                    <div className={classes.textContentContainer}>
                        <Typography
                            variant={'h3'}
                            color={'textPrimary'}
                            gutterBottom
                            align={isMobile ? 'center' : 'left'}
                        >
                            Build something with the CinderBlox API
                        </Typography>
                        <Typography
                            variant={'body1'}
                            color={'textSecondary'}
                            gutterBottom
                            align={isMobile ? 'center' : 'left'}
                            className={classes.textDescriptionContainer}
                        >
                            CinderBlox offers a public API endpoint as a service too!
                        </Typography>
                        <div className={classes.landingSectionCTAButtonContainer}>
                            <Button
                                variant={'contained'}
                                color={'primary'}
                                startIcon={<Book color="white" size={18} />}
                                component={'a'}
                                href={ApiDocs.href}
                            >
                                See the docs
                            </Button>
                        </div>
                    </div>
                }
            />
        );
    };

    return (
        <div>
            <Nav />
            <ScrollToTopButton {...props} />

            <LandingHeader />

            {renderIntroSection()}
            {renderHowItWorks()}
            {renderApiSection()}
            <Footer />
        </div>
    );
};

export type HomePropTypes = {};

export default Home;
