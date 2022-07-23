import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import empty from '../../Loading/empty.gif'
import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
const MyOrder = () => {
    dynamicTitle("MyOrder");
    const [orders, setOrders] = useState([])
    const { user } = useAuth();
    const email = user?.email;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://young-ridge-26718.herokuapp.com/myOrder?email=${email}`
        ,
         {
            headers: {
                "authorization": `Bearer ${localStorage.getItem('idToken')}`
            }
        })
     
        .then(res => 
            // if (res.status === 200) {
            //     return res.json();
            // }
            // else if (res.status === 401) {
            //     navigate('/login');
            // }
            res.json()

        )
        .then(data => setOrders(data));

           
    }, [email])

    return (
        <div>
             <Navbar/>
             {
                 orders.length === 0 && <img src={empty} alt="" />
             }

          <div className='d-flex justify-content-center'>
          <table class="table table-borderless table-hover" style={{width:'500px', marginTop:'150px', marginBottom:'20px'}}>
            <thead>
                <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                    orders.map(order=> {
                        return(
                            <tr>
                            <td>{order._id}</td>
                            <td>${order.price}</td>
                            <td>{order.payment ?
                                        'Paid' :
                                        <Link to={`/payment/${order._id}`}><button className='
                                        btn' style={{backgroundColor:'#30336b', color:'#fff'}} >Pay</button></Link>
                                    }
                            </td>
                            </tr>
                        )
                    })
            }
            
            </tbody>
            </table>
          </div>
             
            <div style={{marginTop:'50px'}}>
            <Footer/>
            <Outlet/>
            </div>
        </div>
    );
};

export default MyOrder;