import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Compontents/Button';
import { FaArrowRight } from 'react-icons/fa';

const Contacts = () => {
    return (
        <div className="card-body relative">
            <div className="form-control mt-12 flex flex-row gap-1">
                <input type="text" placeholder="+880" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg w-1/5" />
                <input type="text" placeholder="01XXXXXX" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg w-4/5" />
            </div>
            <div className="form-control mt-12">
                <input type="text" placeholder="Write Email Address" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg" />
            </div>
            <Link to='/' className='text-[#767676] font-bold text-xs absolute bottom-[170px] '>Back</Link>
            <div className="mt-12 flex items-center justify-center">
                <Link to='/contacts'><Button>Next Step <FaArrowRight /></Button></Link>
            </div>
        </div>
    );
};

export default Contacts;