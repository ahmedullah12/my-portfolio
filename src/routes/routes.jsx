import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import BlogDetails from "../pages/BlogDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/project/:id",
                element: <ProjectDetails/>
            },
            {
                path: "/blog/:id",
                element: <BlogDetails/>
            }
        ]
    }
]);

export default router;