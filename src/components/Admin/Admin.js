import React from 'react';
import { Outlet } from 'react-router-dom';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
import './Admin.css';
import AdminDrawer from './Drawer/AdminDrawer';
import Productlist from './ProductList/Productlist';
const Admin = () => {
    dynamicTitle("Admin")
    return (
        <div>
            <Productlist/>
            <AdminDrawer/>
            <Outlet/>
        </div>
    );
};

export default Admin;