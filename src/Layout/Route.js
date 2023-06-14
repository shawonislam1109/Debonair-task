import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Employee from "../Component/Employee/Employee";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path:'/employee',
        element: <Employee/>,
    }
])