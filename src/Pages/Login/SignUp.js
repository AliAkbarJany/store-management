import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    // GOOGLE Singn Up....
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    // update user Name....
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // CUStom HOOK.... (useToken)
    const [token] = useToken(user || guser)


    const navigate = useNavigate()

    let errorMessage;
    if (error || gerror || updateError) {
        errorMessage = <p className='text-red-500'>Error: {error?.message || gerror?.message || updateError?.message}</p>;
    }

    if (loading || gloading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home')
    }

    const handleSignUp = async event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(name, email, password)
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        // alert('Updated profile');
        console.log('Update done')
        navigate('/home')
    }
    return (
        <div className='flex h-full justify-center mt-5' >
            <div class="card lg:card-side bg-base-100 shadow-xl ">
                {/* <figure><img src="https://i.ibb.co/ZYxGZbs/lock.png" alt="Album" /></figure> */}
                <div class="card-body items-center text-center">
                    <h2 class="card-title ">Sign Up</h2>
                    <form className='mt-4' onSubmit={handleSignUp}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" class="input input-bordered input-warning w-full max-w-xs " required />
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" name="email" class="input input-bordered input-warning w-full max-w-xs " required />
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" class="input input-bordered input-warning w-full max-w-xs " />
                        </div>

                        {/* <input type="text" placeholder="Name" name="name" class="input input-bordered input-warning w-full max-w-xs " required /><br></br>

                        <input type="email" placeholder="Enter Your Email" name="email" class="input input-bordered input-warning w-full max-w-xs my-3" required />

                        <input type="password" placeholder="Password" name="password" class="input input-bordered input-warning w-full max-w-xs mb-3" required /> */}

                        {errorMessage}

                        <div class="card-actions justify-center">
                            <button type='submit' class="btn btn-accent" >Sign Up</button>
                        </div>
                    </form>

                    <p>Have an Account <Link to='/login' className='text-primary'>Please Login</Link> </p>

                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} class="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg">Google Login</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;