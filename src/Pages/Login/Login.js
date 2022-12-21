import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    // google log in........
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || guser)

    // RequireAuth Navigate.....
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (loading || gloading) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || gerror) {
        errorMessage = <p className='text-red-500'>Error: {error?.message || gerror?.message}</p>;
    }
    // if (user || guser) {
    //     console.log(user, guser)
    //     navigate(from, { replace: true });
    // }
    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='flex justify-center mt-5'>
            <div class="card  lg:card-side bg-base-100 shadow-xl">
                {/* <figure><img className='h-fit' src="https://i.ibb.co/mDjYjQW/key.png" alt="Album" /></figure> */}
                <div class="card-body">
                    <h2 class="text-2xl font-bold">Login</h2>
                    <form onSubmit={handleLogin} className='mt-4'>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter Your Email" class="input input-bordered input-warning w-full max-w-xs" />

                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" class="input input-bordered input-warning w-full max-w-xs " />

                        </div>

                        {errorMessage}

                        <div class="card-actions justify-center">
                            <button type="submit" class="btn btn-primary">login</button>
                        </div>
                    </form>



                    <p>New to store-management?? <Link to='/signUp' className='text-primary'>Please Sign Up</Link> </p>

                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} class="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg">Google Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;