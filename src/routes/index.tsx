import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'src/pages/Auth/Login';
import Register from 'src/pages/Auth/Register';
import Home from 'src/pages/Home';
import Private from "./middlewares/Private";
import Public from "./middlewares/Public";

const AppRoutes = () => {

    return <>
        <Routes>
            <Route path="/" element={
                <Private>
                    <Home />
                </Private>
            } />
            <Route path="/auth/login" element={
                <Public>
                    <Login />
                </Public>
            } />
            <Route path="/auth/register" element={
                <Public>
                    <Register />
                </Public>
            } />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    </>;
}

export default AppRoutes;