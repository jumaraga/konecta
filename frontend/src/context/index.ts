import { createContext, useEffect } from "react";
import { UserActionTypes } from "./user.action";

export const UserContext = createContext({} as Context);

export const InitialState = {
    username: '',
    isAdmin: false,
}
interface Context {
    store: UserStore,
    dispatch: React.Dispatch<UserActionTypes>
}
export interface UserStore {
    username: string;
    isAdmin: boolean
}

