import React from 'react';
import {
    ClickableLogo,
    ContentMarginContainer,
    CopyrightNotice,
    GridContainer,
    GridItem,
    Link,
} from 'atoms';
import {
    ApiDocs,
    App,
    Author,
    GitHub,
    Licenses,
    Releases,
    TermsOfUse,
    ZenithGithub,
} from 'config/Nav';
import { DevelopedByInfo, FooterLinkGroup } from 'molecules';
import useStyles from './styles';

const Footer = (props: FooterPropTypes) => {
    const classes = useStyles();

    const renderLinkGroups = () => {
        return (
            <GridContainer
                direction={'row'}
                justify={'flex-start'}
                className={classes.gridContainer}
            >
                <GridItem xs={12} md={4} className={classes.developerInfoContainer}>
                    <ClickableLogo variant={'h5'} gutterBottom logoColor={'black'} />
                    <Link
                        underline={'none'}
                        href={Author.href}
                        external={true}
                        variant={'wrapper'}
                    >
                        <DevelopedByInfo />
                    </Link>
                </GridItem>
                <GridItem xs={12} md={8} className={classes.flexRow}>
                    <div className={classes.linkGroupItemContainer}>
                        <FooterLinkGroup groupHeader={'Users'} links={[App, Releases]} />
                    </div>
                    <div className={classes.linkGroupItemContainer}>
                        <FooterLinkGroup
                            groupHeader={'Developers'}
                            links={[ApiDocs, GitHub]}
                        />
                    </div>
                    <div className={classes.linkGroupItemContainer}>
                        <FooterLinkGroup
                            groupHeader={'Legal'}
                            links={[Licenses, TermsOfUse]}
                        />
                    </div>

                    <div className={classes.linkGroupItemContainer}>
                        <FooterLinkGroup groupHeader={'Social'} links={[ZenithGithub]} />
                    </div>
                </GridItem>
            </GridContainer>
        );
    };

    return (
        <footer className={classes.root}>
            <ContentMarginContainer>{renderLinkGroups()}</ContentMarginContainer>
            <div className={classes.copyrightContainer}>
                <CopyrightNotice />
            </div>
        </footer>
    );
};

export type FooterPropTypes = {};

export default Footer;
