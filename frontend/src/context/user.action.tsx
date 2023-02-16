import { InitialState, UserStore } from ".";
export enum UserActions {
    SET_USER = "[USER] set authenticated user",
    REMOVE_USER = "[USER] remove authenticated user"
};

type SetUser = {
    type: UserActions.SET_USER;
    payload: UserStore
}
type RemoveUser = {
    type: UserActions.REMOVE_USER;
}

export type UserActionTypes =
    SetUser
    | RemoveUser