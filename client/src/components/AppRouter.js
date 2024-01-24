import { Route, Routes } from "react-router-dom";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Admin from "../pages/Admin";
import Auth from "../pages/Auth";
import Basket from "../pages/Basket";
import DevicePage from "../pages/DevicePage";
import Shop from "../pages/Shop";
import { useContext } from "react";
import { Context } from "..";

const PrivateRoute = () => {
    const {user} = useContext(Context)
    console.log(user.isAuth)


    const location = useLocation()
    return (
        user.isAuth  ? <Outlet /> 
         : 
         <Navigate to="/login" state={{ from: location }} replace
         />
        // Если пользователь не авторизован, то перенаправляем его на маршрут /login с помощью компонента Navigate.
        // Свойство replace указывает, что текущий маршрут будет заменен на новый, чтобы пользователь не мог вернуться обратно, используя кнопку "назад" в браузере.
    )
  };

function useRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/registration" element={<Auth />} />
            <Route path="/device/:id" element={<DevicePage />} />
            <Route element={<PrivateRoute />}>
                <Route path="/admin" element={<Admin />} />
                <Route path="/basket" element={<Basket />} />
            </Route>


        </Routes>
    );
}


export default useRoutes;
