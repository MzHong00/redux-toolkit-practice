import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            
        ]
    },
    {
        path: "/:id",
        element: <Detail></Detail>
    },
]);