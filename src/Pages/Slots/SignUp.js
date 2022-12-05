import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { RegContext } from '../../Contexts/RegisterContext';
import logo from '../../Assets/Logo/ultimate hrm logo-05-02 2.png';

const SignUp = () => {
    const { handleSubmit, onSubmit, signupSucess } = useContext(RegContext);
    const dropShadow = {
        boxShadow: '1px -10px 25px rgba(201, 201, 201, 0.25), -1px 10px 25px rgba(147, 147, 147, 0.25)'
    }
    const navigate = useNavigate()

    if (signupSucess) {
        navigate('/attendance');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full md:w-[516px] bg-base-100 h-[630px] rounded-none p-3 md:px-12" style={dropShadow}>
            <img src={logo} className="w-[164.21px] h-[60px] mt-20 mx-auto mb-3 md:hidden" alt='' />
            <h2 className='text-2xl text-center md:mt-28'>SignUp Form</h2>
            <Outlet />
        </form>
    );
};

export default SignUp;