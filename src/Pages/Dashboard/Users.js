import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading/Loading';
import UsersRow from './UsersRow';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Users = () => {
    
    // React Query
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All USERS:{users.length}</h2>
            
            {/* <h2>LOG IN USER IFORMATION:{user}</h2> */}
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr >
                            <th></th>
                            <th className='text-2xl'>Email</th>
                            <th className='text-2xl'>Create Admin</th>
                            <th className='text-2xl'>Delete Admin</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <UsersRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            >

                            </UsersRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;