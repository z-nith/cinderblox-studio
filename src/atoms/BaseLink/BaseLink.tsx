/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef(function NextComposed(
    props: NextComposedPropTypes,
    ref: any,
) {
    const { as, href, ...other } = props;

    return (
        <NextLink href={href} as={as}>
            <a ref={ref} {...other} />
        </NextLink>
    );
});

NextComposed.propTypes = {};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function BaseLink(props: BaseLinkPropTypes) {
    const {
        href,
        activeClassName = 'active',
        className: classNameProps,
        innerRef,
        naked,
        ...other
    } = props;

    const router = useRouter();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });

    if (naked) {
        return (
            <NextComposed className={className} ref={innerRef} href={href} {...other} />
        );
    }

    return (
        <MuiLink
            component={NextComposed}
            className={className}
            ref={innerRef}
            href={href}
            {...other}
        />
    );
}

type NextComposedPropTypes = {
    as?: string;
    href: string;
    prefetch?: boolean;
    classes?: any;
    className?: string;
};

export type BaseLinkPropTypes = {
    activeClassName?: string;
    as?: string;
    className?: string;
    href?: string | any;
    innerRef?: Function | any;
    naked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    prefetch?: boolean;
    children: React.ReactNode;
};

export default React.forwardRef((props: any, ref: any) => (
    <BaseLink {...props} innerRef={ref} />
));
