
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Order from './components/order/Order';
import Admin from './components/Admin/Admin';
import Productlist from './components/Admin/ProductList/Productlist';
import AddProduct from './components/Admin/Addproduct/AddProduct';
import Shipping from './components/Shipping/Shipping';
import UpdateProduct from './components/Admin/Updateproduct/UpdateProduct';
import MyOrder from './components/MyOrder/MyOrder';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AdminRoute from './components/Login/AdminRoute/AdminRoute';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import PaymentProcess from './components/Home/PaymentProcess/PaymentProcess';


function App() {
  return (
      
  
     <AuthProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/:productId" element={<PrivateRoute><ProductDetails/></PrivateRoute>}/>
        <Route path="myorder" element={<PrivateRoute><MyOrder/></PrivateRoute>}/>
        <Route path="order" element={<PrivateRoute><Order/></PrivateRoute>}/>
        <Route path="order/shipping" element={<PrivateRoute><Shipping/></PrivateRoute>}/>
        <Route path={`payment/:orderId`} element={<PrivateRoute><PaymentProcess/></PrivateRoute>}/>
        <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
        <Route path="product-list/*" element={<AdminRoute><Productlist/></AdminRoute>}/>
        <Route path="updateproduct/:id" element={<AdminRoute><UpdateProduct/></AdminRoute>}/>
        <Route path="add-product" element={<AdminRoute><AddProduct/></AdminRoute>}/>
        <Route path="make-admin" element={<AdminRoute><MakeAdmin/></AdminRoute>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/> }/>
        <Route path="/register" element={<Register/>}/>
        <Route exact path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
     </AuthProvider>
    
  );
}

export default App;
