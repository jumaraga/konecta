import { authEndpoints } from "@/config/routes/endpoints";
import { getFormFields } from "@/utils/getDataForm";
import axios from "axios";
import React, { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { SignInInput } from "./FormInput";
import Cookies from "js-cookie";

export const LoginForm = () => {
    const navegate = useNavigate();
    const ref = useRef<HTMLFormElement>(null);
    const register = () => {
        navegate('/signIn');
    };
    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = getFormFields(ref.current as HTMLFormElement, 'email', 'password');
        const response = await axios.post(authEndpoints.login, data);
        if (response.data.data.accessToken) {
            Cookies.set('Authentication', response.data.data.accessToken, { expires: 2628000 });
            navegate('/')
        }
    }
    return (
        <form ref={ref} onSubmit={submitForm} className=" border rounded-xl shadow-lg w-[60%] min-w-[20rem] px-10 py-8">
            <h1 className=" text-lg self-center">Create a new account</h1>
            <SignInInput name="email" label="email" type="text" />
            <SignInInput name="password" label="Password" type="password" />
            <div className="mt-5 flex justify-between">
                <Button type="submit" title="Login" classes=" bg-green-500 w-5/12"></Button>
                <Button type="button" handler={register} title="Register" classes=" bg-blue-500 w-5/12"></Button>
            </div>
        </form>
    )
};