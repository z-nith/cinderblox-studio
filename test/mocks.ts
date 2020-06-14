/**
 * Pulled veratim from: https://github.com/zeit/next.js/issues/7479#issuecomment-587145429
 */

// Mocks useRouter
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

/**
 * mockNextUseRouter
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
 */
export function mockNextUseRouter(props: {
    route: string;
    pathname: string;
    query: string;
    asPath: string;
}) {
    useRouter.mockImplementation(() => ({
        route: props.route,
        pathname: props.pathname,
        query: props.query,
        asPath: props.asPath,
    }));
}
