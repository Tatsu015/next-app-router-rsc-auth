import { auth } from "./auth";

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    console.log('pathname', nextUrl.pathname);
    console.log('isLoggedIn', isLoggedIn);
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};