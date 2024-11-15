import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<h1>home</h1>
            },
            {
                path:"/orders",
                element: <div>Orders</div>
            },
            {
                path:"/about",
                element: <div>about</div>
            },
        ]
    }
])

export default router;