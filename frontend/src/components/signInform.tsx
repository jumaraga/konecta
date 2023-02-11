import ClientAxios from "@/config/axios";
import { authEndpoints } from "@/config/routes/endpoints";
import React, { useRef } from "react";
import { Button } from "./Button";
import { SignInInput } from "./FormInput";
import Cookie from 'js-cookie'
import { redirect, useNavigate } from "react-router-dom";

export const SignInForm = () => {
    const navegate = useNavigate()
    const ref = useRef<HTMLFormElement>(null)
    function register(e: React.MouseEvent) {
        e.preventDefault;
    };
    function login() {
        navegate('/login')
    }
    async function submitForm(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData(ref.current as HTMLFormElement);
        const data = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            username: formData.get('username'),
            email: formData.get('email'),
            phoneNumber: formData.get('phoneNumber'),
            password: formData.get('password'),
        };
        const response = await ClientAxios.post(authEndpoints.signIn, data, { withCredentials: true });
        if (response.data.data.accessToken) {
            Cookie.set('Authentication', response.data.data.accessToken, { expires: 2628000 });
            navegate('/')
        }
    }
    return (
        <form ref={ref} onSubmit={submitForm} className=" border rounded-xl shadow-lg w-[60%] min-w-[20rem] px-10 py-8">
            <h1 className=" text-lg self-center">Create a new account</h1>
            <SignInInput name="firstname" label="Fistname" type="text" />
            <SignInInput name="lastname" label="Lastname" type="text" />
            <SignInInput name="username" label="Username" type="text" />
            <SignInInput name="email" label="email" type="text" />
            <SignInInput name="phoneNumber" label="Phone number" type="text" />
            <SignInInput name="password" label="Password" type="password" />
            <div className="mt-5 flex justify-between">
                <Button type="submit" title="Register" classes=" bg-green-500 w-5/12"></Button>
                <Button type="button" handler={login} title="Login" classes=" bg-blue-500 w-5/12"></Button>
            </div>
        </form>
    )
}