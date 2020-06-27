import React from 'react';

export type NavigationLink = {
    external?: boolean;
    href: string;
    as?: string;
    displayText: string;
};

export interface NavigationLinkWithIcon extends NavigationLink {
    icon?: React.ReactNode;
}
