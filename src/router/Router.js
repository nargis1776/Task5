import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./layout/Layout";
import ApplyLeave from "../pages/ApplyLeave";
import RequestLeave from "../pages/RequestLeave";
import Login from "../component/Login";
import Register from "../component/Register";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../component/Home";

export const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="dashboard/staff" element={<ProtectedRoute allowedRoles={"Staff"}>
                    <ApplyLeave/>
            </ProtectedRoute>}/>
            <Route path="dashboard/hod" element={<ProtectedRoute allowedRoles={"HOD"}>
                    <RequestLeave/>
            </ProtectedRoute>}/>
        </Route>
    )
)

function Router(){
    return(
        <RouterProvider router={router}>

        </RouterProvider>
    )

}
export default Router