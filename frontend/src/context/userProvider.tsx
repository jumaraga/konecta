import ClientAxios, { PrivateAxios } from "@/config/axios";
import { authEndpoints } from "@/config/routes/endpoints";
import axios from "axios";
import { ReactNode, useContext, useEffect, useReducer, useState } from "react";
import { InitialState, UserContext } from ".";
import { UserActions } from "./user.action";
import { userReducer } from "./userReducer";
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(userReducer, InitialState);
    const store = { store: state, dispatch }
    async function getUserData() {
        const data = (await PrivateAxios.get(authEndpoints.getUser)).data;
        dispatch({ type: UserActions.SET_USER, payload: data })
    };
    useEffect(() => {
        getUserData()
    }, []);
    return (
        <UserContext.Provider value={store}>
            {children}
        </UserContext.Provider>
    )
}