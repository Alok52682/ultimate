import React from 'react';
import Button from '../../Compontents/Button';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Name = () => {
    return (
        <div className="card-body relative">
            <div className="form-control mt-12">
                <input type="text" placeholder="Write First Name" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg" />
            </div>
            <div className="form-control mt-12">
                <input type="text" placeholder="Write Last Name" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg" />
            </div>
            <div className="mt-12 flex justify-center">
                <Link to='/contacts'><Button>Next Step <FaArrowRight /></Button></Link>
            </div>
            <p className='text-sm text-slate-400 absolute bottom-10 right-0'>Already have an account? <Link className='btn btn-link text-[#1678CB] p-0'>LogIn Here!</Link></p>
        </div>
    );
};

export default Name;