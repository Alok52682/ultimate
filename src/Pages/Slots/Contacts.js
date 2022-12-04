import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Compontents/Button';
import { FaArrowRight } from 'react-icons/fa';
import { RegContext } from '../../Contexts/RegisterContext';

const Contacts = () => {
    const { register, errors } = useContext(RegContext);
    return (
        <div className="card-body relative">
            <div className="form-control mt-12 flex flex-row gap-1">
                <input {...register("phoneCode")} type="text" defaultValue={'+880'} className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg w-1/5 text-[#767676]" />
                <input {...register("phone", { required: true })} type="text" placeholder="1XXXXXX" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg w-4/5" />
                {errors.phone && <span className='text-error text-xs'>Phone number is required</span>}
            </div>
            <div className="form-control mt-12">
                <input {...register("email", { required: true })} type="email" placeholder="Write Email Address" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg" />
                {errors.email && <span className='text-error text-xs'>Email is required</span>}
            </div>
            <Link to='/' className='text-[#767676] font-bold text-xs absolute bottom-[170px] '>Back</Link>
            <div className="mt-12 flex items-center justify-center">
                <Link to='/password'><Button>Next Step <FaArrowRight /></Button></Link>
            </div>
        </div>
    );
};

export default Contacts;