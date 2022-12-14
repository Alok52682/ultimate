import React, { createContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

export const RegContext = createContext();
const RegisterContext = ({ children }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupSucess, setSignupSucess] = useState(false);
    const onSubmit = data => {
        const regData = {
            first_name: data.firstName,
            last_Name: data.lastName,
            phone_number: `${data.phoneCode}${data.phone}`,
            email: data.email,
            password: data.password
        }
        setSignupSucess(false);
        fetch('https://test.nexisltd.com/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(regData)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.sucess) {
                    setSignupSucess(true)
                    toast.success(data.sucess);
                }
            })

    };


    return (
        <RegContext.Provider value={{ register, handleSubmit, onSubmit, errors, signupSucess }}>
            {children}
        </RegContext.Provider>
    );
};

export default RegisterContext;