import React from 'react';
import {
    Book,
    File,
    GitHub as GitHubFeather,
    Home as HomeFeather,
    Package,
    Server,
    Info,
    ExternalLink,
} from 'react-feather';
import { NavigationLinkWithIcon } from 'types/navigation';

// TODO: Add proper href here
export const ApiDocs: NavigationLinkWithIcon = {
    href: 'https://google.com',
    displayText: 'API Docs',
    external: true,
    icon: <Book color={'white'} />,
};

export const App: NavigationLinkWithIcon = {
    href: '/color-studio',
    displayText: 'App',
    icon: <Server color={'white'} />,
};

export const Releases: NavigationLinkWithIcon = {
    href: 'https://headwayapp.co/cinderblox-studio-release-notes',
    displayText: 'Releases',
    external: true,
    icon: <Package color={'white'} />,
};

export const Home: NavigationLinkWithIcon = {
    href: '/',
    displayText: 'Home',
    icon: <HomeFeather color={'white'} />,
};

export const Licenses: NavigationLinkWithIcon = {
    href: '/licenses',
    displayText: 'Licenses',
    icon: <File color={'white'} />,
};

export const TermsOfUse: NavigationLinkWithIcon = {
    href: '/terms-of-use',
    displayText: 'Terms of use',
    icon: <Info color={'white'} />,
};

export const GitHub: NavigationLinkWithIcon = {
    href: 'https://github.com/z-nith/cinderblox-studio',
    displayText: 'GitHub',
    icon: <GitHubFeather color={'white'} />,
    external: true,
};

export const ZenithGithub: NavigationLinkWithIcon = {
    href: 'https://github.com/z-nith/',
    displayText: 'GitHub',
    icon: <GitHubFeather color={'white'} />,
    external: true,
};

export const Author: NavigationLinkWithIcon = {
    href: 'https://github.com/Jmeza081',
    displayText: 'More projects from Jesse',
    external: true,
    icon: <GitHubFeather color={'white'} />,
};

export const LearnMore: NavigationLinkWithIcon = {
    href: 'https://en.wikipedia.org/wiki/Color_quantization',
    displayText: 'Learn more',
    external: true,
    icon: <ExternalLink color={'white'} />,
};
