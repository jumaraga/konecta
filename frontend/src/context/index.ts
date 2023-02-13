import { createContext, useEffect } from "react";

export const UserContext = createContext({}as typeof initialState);

export const initialState = {
    username: '',
    isAdmin: false,
}
