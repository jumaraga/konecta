import React, { FunctionComponent } from "react";
import { Button } from "./Button";
export const Header: FunctionComponent = () => {
    return (
        <header className="grid p-2">
            <div className=" flex justify-between min-w-[13rem] justify-self-end">
                <Button title="Sign In" classes="w-[47%]  bg-blue-400" />
            <Button title="LogIn"  classes="w-[47%]  bg-blue-400"/>
            </div>
        </header>
    )
}