import React from "react";
import Splash from "../components/global/splash";
import { AuthContext } from "../contexts/auth";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";


const Routes = () => {
    const { signed, loadingAuth } = React.useContext(AuthContext);

    if (loadingAuth) return <Splash />

    return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;