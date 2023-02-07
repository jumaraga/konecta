import React from "react";
import { SignInInput } from "./formInput";

export const SignInForm = () => {
    return (
        <div className=" border rounded-xl shadow-lg w-[60%] min-w-[20rem] px-10 py-8">
            <h1 className=" text-lg self-center">Create a new account</h1>
            <SignInInput name="firstname" label="Fistname" type="text" />
            <SignInInput name="lastname" label="Lastname" type="text" />
            <SignInInput name="email" label="email" type="text" />
            <SignInInput name="phoneNumber" label="Phone number" type="text" />
            <SignInInput name="password" label="Password" type="password" />
        </div>
    )
}