import { ADMIN_PANEL } from "@/config/routes/paths";
import { UserContext } from "@/context";
import { UserActions } from "@/context/user.action";
import React, { FunctionComponent, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "./Button";
export const Header: FunctionComponent = () => {
    const navegate = useNavigate();
    const { store: { isAdmin }, dispatch } = useContext(UserContext)
    function logIn() {
        navegate('/login')
    };
    function register() {
        navegate('/signIn')
    };
    function adminPanel() {
        window.location.assign('/admin/panel')
    };
    function logOut() {
        dispatch({ type: UserActions.REMOVE_USER })
    }
    return (
        <header className="grid p-2">
            {isAdmin === undefined
                ? <div className=" flex justify-between min-w-[13rem] justify-self-end">
                    <Button handler={register} title="Sign In" classes="w-[47%]  bg-blue-400" />
                    <Button handler={logIn} title="LogIn" classes="w-[47%]  bg-blue-400" />
                </div>
                : <div className=" flex justify-between min-w-[13rem] justify-self-end">
                    <Button classes="bg-red-400" handler={logOut} title="Log out"></Button>
                    {isAdmin && <Button classes="bg-red-400" handler={adminPanel} title="Admin Panel"></Button>}
                </div>}
        </header>
    )
};
