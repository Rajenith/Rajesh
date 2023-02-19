import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import './sign.css'
const schema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email('Please enter your valid email').required('Enter email'),
    password: yup.string().required('Please enter your password'),
    phone: yup.number().required('Enter 10 digit mobile number'),


})
function Signup() {
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    return (
        <div id="forms">
            <div className="inputs">
                <h1 id="rehead">Register Now</h1>
                <form onSubmit={handleSubmit((data) => {
                    console.log(data)
                })}>
                    <input {...register('name')} type='text' placeholder="Name" />
                    <p>{errors.name?.message}</p>
                    <input {...register('email')} type='email' placeholder="Email" />
                    <p>{errors.email?.message}</p>
                    <input {...register('password')} type='password' placeholder="Password" />
                    <p>{errors.password?.message}</p>
                    <input {...register('phone')} type='number' placeholder="Phone number" maxLength='10' />
                    <p>{errors.phone?.message}</p>
                    <button type="submit" disabled={isDirty && !isValid} id='submit'>Submit</button>
                </form>

            </div>
        </div>

    )
}
export default Signup   