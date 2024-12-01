import {
    HomePage,
    AboutUsPage,
    LandingPage,
    CartPage,
    GamesPage,
    DLCPage,
    IRLPage
} from './containers';

export const routes = [
    {
        path: '/',
        element: <HomePage/>
    }, 
    {
        path: '/about',
        element: <AboutUsPage/>
    },
    {
        path: '/home',
        element: <LandingPage/>
    },
    {
        path: '/cart',
        element: <CartPage/>
    },
    {
        path: '/games',
        element: <GamesPage/> 
    },
    {
        path: '/dlcs',
        element: <DLCPage/> 
    },
    {
        path: '/irl',
        element: <IRLPage/> 
    }
]