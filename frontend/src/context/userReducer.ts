import Cookies from "js-cookie";
import { UserStore } from ".";
import { UserActions, UserActionTypes } from "./user.action";

export const userReducer = (
    state: UserStore,
    action: UserActionTypes
) => {
    switch (action.type) {
        case UserActions.SET_USER:
            return { ...state, ...action.payload}
        case UserActions.REMOVE_USER:
            Cookies.remove('Authentication');
            return { ...state, username:'', isAdmin:undefined}
        default:
            return state;
    }
};
