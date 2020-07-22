import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import { DefaultSeo } from 'next-seo';
import theme from 'theme';
import './globals.css';

export default function MyApp(props: any) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>CinderBlox</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://cinderblox.studio/',
                    site_name: 'CinderBlox Studio',
                    description: 'Build beautiful color palettes in the cloud',
                    images: [
                        {
                            url:
                                'https://res.cloudinary.com/znth/image/upload/v1595455108/Open_Graph_Image_hcy12f.png',
                            width: 800,
                            height: 600,
                            alt: 'Og Image',
                        },
                    ],
                }}
                description={'Build beautiful color palettes in the cloud'}
            />
            <ThemeProvider theme={theme}>
                <ParallaxProvider>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ParallaxProvider>
            </ThemeProvider>
        </React.Fragment>
    );
}

export interface AppPropTypes extends AppProps {
    Component: NextComponentType<NextPageContext, any>;
}
