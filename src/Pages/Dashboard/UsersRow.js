import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, index, refetch }) => {
    const {_id, email, role } = user
    // console.log(_id)
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/superAdmin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Fail to Make an Admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully Make an Admin')
                }
            })
    }

    const[users,setUsers]=useState([])
    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are you sure to Delete Device')
        if (proceed) {
            fetch(`http://localhost:5000/deleteUsers/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                })
        }
    }
    return (

        <tr class="hover">
            <th>{index + 1}</th>
            <td>{email}</td>
            <td className='font-bold'>{(role !== 'SuperAdmin') ? <button onClick={makeAdmin} class="btn btn-xs text-warning">Make Admin</button> : "SUPER ADMIN"}</td>

            <td className='font-bold'><button onClick={()=>handleDeleteUser(_id)} class="btn btn-xs text-warning">Delete Admin</button> </td>
            {/* <td>Purple</td> */}
        </tr>

    );
};

export default UsersRow;