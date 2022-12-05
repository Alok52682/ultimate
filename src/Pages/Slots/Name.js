import React, { useContext } from 'react';
import Button from '../../Compontents/Button';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RegContext } from '../../Contexts/RegisterContext';

const Name = () => {
    const { register, errors } = useContext(RegContext);
    return (
        <div className="card-body p-5 relative">
            <div className="form-control mt-6 md:mt-12">
                <input {...register("firstName", { required: true })} type="text" placeholder="Write First Name" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg" />
                {errors.firstName && <span className='text-error text-xs'>This field is required</span>}
            </div>
            <div className="form-control mt-6 md:mt-12">
                <input {...register("lastName", { required: true })} type="text" name='lastName' placeholder="Write Last Name" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg" />
                {errors.lastName && <span className='text-error text-xs'>This field is required</span>}
            </div>
            <div className="mt-6 md:mt-12 flex justify-center">
                <Link to='/contacts'><Button>Next Step <FaArrowRight /></Button></Link>
            </div>
            <p className='text-sm text-slate-400 absolute bottom-10 right-8 md:right-0'>Already have an account? <Link to='/login' className='btn btn-link text-[#1678CB] p-0'>LogIn Here!</Link></p>
        </div>
    );
};

export default Name;