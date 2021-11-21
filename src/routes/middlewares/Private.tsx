import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthType } from "src/redux/types/AuthType";
import { AppStateType } from "src/redux/types/AppStateType";
import { PropsMiddleware } from "src/types/PropsMiddleware";

const Private = ({ children: Component } : PropsMiddleware) => {
    const { user } : AuthType = useSelector((state: AppStateType) => state.auth);
    if(user) return Component;
    else return <Navigate to="/auth/login" />;
}

export default Private;