import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Compontents/Button';

const Password = () => {
    return (
        <div className="card-body relative">
            <div className="form-control mt-12">
                <input type="Password" placeholder="Write Password" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg" />
                <label className="label-text-alt mt-1 px-3 text-[#767676]">Your password must be 8 character</label>
            </div>
            <Link to='/contacts' className='text-[#767676] font-bold text-xs absolute bottom-[205px] '>Back</Link>
            <div className="mt-24 flex items-center justify-center">
                <Link to='/contacts'><Button>Sign Up</Button></Link>
            </div>
        </div>
    );
};

export default Password;