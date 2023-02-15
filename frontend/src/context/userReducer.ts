import { UserStore } from ".";
import { UserActions, UserActionTypes } from "./user.action";

export const userReducer = (
    state: UserStore,
    action: UserActionTypes
) => {
    switch (action.type) {
        case UserActions.SET_USER:
            return { ...state, ...action.payload}
        default:
            return state;
    }
};
