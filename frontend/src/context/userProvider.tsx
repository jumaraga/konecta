import axios from "axios";
import { ReactNode, useContext, useEffect, useState } from "react";
import { initialState, UserContext } from ".";
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState(initialState)
    async function getUserData() {
        const data = (await axios.get('')).data;
        setValue((prev) => ({ ...prev, data }))
    };
    useEffect(() => {
        getUserData()
    }, []);
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}