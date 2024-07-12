import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home_page/HomePage";
import AboutPage from "../pages/about_page/AboutPage";
import NotFount from "../pages/not_fount_page/NotFount";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/",element:<HomePage/>},
            {path:"/about",element:<AboutPage/>},
            {path:"*",element:<NotFount/>}
        ]
    }
])