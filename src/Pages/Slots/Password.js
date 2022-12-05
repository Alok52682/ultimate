import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Compontents/Button';
import { RegContext } from '../../Contexts/RegisterContext';

const Password = () => {
    const { register, errors } = useContext(RegContext);
    return (
        <div className="card-body p-5 md:p-0 relative">
            <div className="form-control mt-6 md:mt-12">
                <input type="Password" {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be 8 characters long" }
                })} placeholder="Write Password" className="border-0 border-b-2 border-grey-dark px-3 py-2 text-lg" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                <label className="label-text-alt mt-1 px-3 text-[#767676]">Your password must be 8 character</label>
            </div>
            <Link to='/contacts' className='text-[#767676] font-bold text-xs absolute bottom-[210px] '>Back</Link>
            <div className="mt-16 md:mt-24 flex items-center justify-center">
                <Button type='submit'>Sign Up</Button>
            </div>
        </div>
    );
};

export default Password;