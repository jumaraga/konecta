import { InitialState, UserStore } from ".";
export enum UserActions {
    SET_USER = "[USER] set authenticated user",
};

type SetUser = {
    type: UserActions.SET_USER;
    payload:UserStore
}

export type UserActionTypes =
    SetUser