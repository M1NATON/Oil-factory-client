import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>} key='/'/>
                <Route path='/about' element={<AboutPage/>} key='/about'/>
                <Route path='/admin' element={<AdminPage/>} key='/admin'/>
                <Route path='/contact' element={<ContactPage/>} key='/contact'/>
                <Route path='/dashboard' element={<DashboardPage/>} key='/dashboard'/>
                <Route path='/product' element={<ProductPage/>} key='/product'/>
                <Route path='/404' element={<NotFoundPage/>} key='/'/>
                <Route path='/*' element={<Navigate to='/404'/>} />
            </Routes>
        </div>
    );
};

export default AppRouter;