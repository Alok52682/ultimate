import React from 'react';
import { Outlet } from 'react-router-dom';
import banner from '../Assets/Banner/istockphoto-1321277096-612x612 1.png';
import logo from '../Assets/Logo/ultimate hrm logo-05-02 2.png';

const AccountCreation = () => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row justify-around w-full relative">
                <img src={logo} className="w-[164.21px] h-[60px] absolute top-[62px] md:left-[56px]" alt='' />
                <div className="text-center lg:text-left hidden md:block">
                    <img src={banner} className="w-[612px] h-[437px]" alt='' />
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default AccountCreation;