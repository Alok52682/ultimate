import React, { createContext } from 'react';
import { useForm } from "react-hook-form";

export const RegContext = createContext();
const RegisterContext = ({ children }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const regData = {
            first_name: data.firstName,
            last_Name: data.lastName,
            phone_number: `${data.phoneCode}${data.phone}`,
            email: data.email,
            password: data.password
        }
        console.log(regData);

    };


    return (
        <RegContext.Provider value={{ register, handleSubmit, onSubmit, errors }}>
            {children}
        </RegContext.Provider>
    );
};

export default RegisterContext;