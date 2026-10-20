import React from "react";
import PathConstants from "./pathConstants";
import PrivateRoutes from "../components/routes/PrivateRoutes";

const FaqPage = React.lazy(() => import("../pages/faq"));
const LoginPage = React.lazy(() => import("../pages/login"));
const QuizPage = React.lazy(() => import("../pages/quiz"));
const RegisterPage = React.lazy(() => import("../pages/register"));
const ProductsPage = React.lazy(() => import("../pages/products"));
const OrdersPage = React.lazy(() => import("../pages/orders/orders"));
const CartPage = React.lazy(()=> import("../pages/cart"));
const ProductsDetailsPage = React.lazy(()=> import("../pages/product-details"));

const routes = [
    { path: PathConstants.HOME, element: <FaqPage /> },
    { path: PathConstants.LOGIN, element: <LoginPage /> },
    { path: PathConstants.QUIZ, element: <QuizPage /> },
    { path: PathConstants.REGISTER, element: <RegisterPage /> },
    { path: PathConstants.PRODUCTS, element: <ProductsPage /> },
    { path:PathConstants.PRODUCTS_DETAILS,element:<ProductsDetailsPage/>},
    {
        element:<PrivateRoutes/>,
       children:[
        {path:PathConstants.ORDERS ,element:<OrdersPage/>},
        {path:PathConstants.CART ,element:<CartPage/>}
       ]
    },
];

export default routes;