import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Compontents/Button';
import toast from 'react-hot-toast';

const SignIn = () => {
    const dropShadow = {
        boxShadow: '1px -10px 25px rgba(201, 201, 201, 0.25), -1px 10px 25px rgba(147, 147, 147, 0.25)'
    }
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const handelLogIn = data => {
        const loginData = {
            email: data.email,
            password: data.password
        }
        fetch('https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then((data) => {
                localStorage.setItem('Access_Token', data.access_token);
                navigate('/attendance')
                toast.success('Log in successfull')
            })
    }

    return (
        <div className="card flex-shrink-0 w-[516px] bg-base-100 h-[630px] rounded-none px-12" style={dropShadow}>
            <h2 className='text-2xl text-center mt-28'>Log in Form</h2>
            <form onClick={handleSubmit(handelLogIn)} className="card-body relative">
                <div className="form-control mt-12">
                    <input {...register("email", { required: true })} type="email" placeholder="Write Email Address" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg" />
                </div>
                <div className="form-control mt-12">
                    <input {...register("password", {
                        required: true,
                        minLength: { value: 8 }
                    })} type="password" placeholder="Write password" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg" required />
                    <label className="label-text-alt mt-1 px-3 text-[#767676]">Your password must be 8 character</label>
                </div>
                <div className="mt-12 flex justify-center">
                    <Button type='submit'>Log In</Button>
                </div>
                <p className='text-sm text-slate-400 absolute bottom-10 right-0'>Already have an account? <Link to='/' className='btn btn-link text-[#1678CB] p-0'>Signup Here!</Link></p>
            </form>
        </div>
    );
};

export default SignIn;