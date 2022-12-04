import React from 'react';
import { Outlet } from 'react-router-dom';

const SignUp = () => {
    const dropShadow = {
        boxShadow: '1px -10px 25px rgba(201, 201, 201, 0.25), -1px 10px 25px rgba(147, 147, 147, 0.25)'
    }
    return (
        <div className="card flex-shrink-0 w-[516px] bg-base-100 h-[630px] rounded-none px-12" style={dropShadow}>
            <h2 className='text-2xl text-center mt-28'>SignUp Form</h2>
            <Outlet />
        </div>
    );
};

export default SignUp;