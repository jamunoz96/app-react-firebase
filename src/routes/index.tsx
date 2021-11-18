import { Routes, Route } from 'react-router-dom';
import Login from 'src/pages/Auth/Login';
import Register from 'src/pages/Auth/Register';
import Home from 'src/pages/Home';


const AppRoutes = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
        </Routes>
    </>;
}

export default AppRoutes;