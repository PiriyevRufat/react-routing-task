import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import Users from "../pages/admin/Users/Users";
import AdminRoot from "../pages/admin/AdminRoot";
import SIteRoot from "../pages/site/SIteRoot";
import Error from "../pages/Error/Error";
import Detail from "../pages/site/Detail/Detail";
import AddProduct from "../pages/AddProduct/AddProduct";

const ROUTES = [
    {
        path:"/",
        element:<SIteRoot/>,
        children:[{
            path:"",
            element:<Home/>
        },
        {
            path:"shop",
            element:<Shop/>
        },{
            path:"/:id",
            element:<Detail/>
        },
        {
            path:"*",
            element:<Error/>
        }]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[{
            path:"",
            element:<Dashboard/>
        },{
            path:"products",
            element:<Products/>
        },
        {
            path:"add",
            element:<AddProduct/>
        },
        {
            path:"users",
            element:<Users/>
        }
]}
]

export default ROUTES;