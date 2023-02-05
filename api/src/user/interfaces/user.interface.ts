export interface INewUserInfo {
    username: string,
    password: string,
    email: string,
    lastname: string
    phoneNumber?:string

}

import { User } from "../user.model";

// export class  {
//     userInfo: { user: User, password: string }
// }