import {
  createBrowserRouter
} from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import RegisterProtect from "../Components/RegisterProtect";
import { CountryLoader } from "../Loader/CountryLoader";
import singleLoader from "../Loader/SingleLoader";
import { SpotLoader } from "../Loader/SpotLoader";
import AllSpot from "../Pages/All-Spots/AllSpots";
import CountryPage from "../Pages/Country-Page/CountryPage";
import ErrorPage from "../Pages/Error-Page/ErrorPage";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import Login from "../Pages/Login/Login";
import MySpot from "../Pages/My-Spot/MySpot";
import Register from "../Pages/Register/Register";
import SpotDetail from "../Pages/Spot-Detail/SpotDetail";
import AddSpots from "../Pages/Spot-Page/AddSpots";
import UpdateSpot from "../Pages/Update-Spot/UpdateSpot";
    
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            index: true,
            element: <Home></Home>,
            loader: SpotLoader
          },
          {
            path: "/add-spots",
            element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>
          },
          {
            path: "/update-spots",
            element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>
          },
          {
            path: "/all-spots",
            element: <AllSpot></AllSpot>,
            loader: SpotLoader
          },
          {
            path: "/country-spots/:name",
            element: <CountryPage></CountryPage>,
            loader: CountryLoader
          },
          {
            path: "/my-spots",
            element: <PrivateRoute><MySpot></MySpot></PrivateRoute>
          },
          {
            path: "/login",
            element: <RegisterProtect><Login></Login></RegisterProtect>,
          },
          {
            path: "/register",
            element: <RegisterProtect><Register></Register></RegisterProtect>
          },
          {
            path: "/spot_details/:Id",
            element: <PrivateRoute><SpotDetail></SpotDetail></PrivateRoute>,
            loader: singleLoader,
          },
          {
            path: "update-spot/:Id",
            element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
            loader: singleLoader,
          },
        ],
      },
    ]);
  
    export default router;