import { Input } from "@/interface";
import React, { FunctionComponent } from "react";

export const SignInInput: FunctionComponent<Input> = ({name,label ,cssClasses,type}) => {
    return (
        <div>
            <h5>{label}</h5>
            <input className={`w-full border-slate-500 border rounded ${cssClasses}`} name={name} type={type} />
        </div>

    )
}