 import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import HomePage from "../pages/HomePage/HomePage";
 import OrderPage from "../pages/OrderPage/OrderPage";
 import ProductPage from "../pages/ProductsPage/ProductsPage";
 import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
 export const routes =[
    {
        path:'/',
        page: HomePage,
        isShowHeader:true
    },
    {
        path:'/order',
        page: OrderPage,
        isShowHeader:true
    },
    {
        path:'/products',
        page: ProductPage,
        isShowHeader:true
    },
    {
        path: '/product/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/product-details/:id',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path:'*',
        page:NotFoundPage
    }

]