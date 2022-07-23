import React, { useState } from 'react';

import AdminDrawer from '../Drawer/AdminDrawer';
import {toast, Toaster} from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import { dynamicTitle } from '../../DynamicTitle/DynamicTitle';

const MakeAdmin = () => {
dynamicTitle("Make Admin")
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://young-ridge-26718.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
                // console.log(data)
            })

        e.preventDefault()
    }
    return (
        <div>
            <AdminDrawer/>
           <div className="row">
               <div className="col-md-10 p-4 pr-5" style={{position:'absolute', right:0 }}>
               <form action="" onSubmit={handleAdminSubmit}>
                <label for="exampleInputEmail1" class="form-label">Make an admin</label>
                <input type="email" class="form-control" onBlur={handleOnBlur} required style={{width:'30%'}}/>
                <br />
                <button type="submit" className="btn" style={{backgroundColor:'#71BA58'}}><span style={{color:'#FFFFFF'}}>Submit</span></button>
                </form>
                {success && toast.success("Admin added successfully") }
               </div>
           </div>
        </div>
    );
};

export default MakeAdmin;