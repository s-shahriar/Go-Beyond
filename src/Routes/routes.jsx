import {
    createBrowserRouter
} from "react-router-dom";
  

  
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
        ],
      },
    ]);
  
    export default router;