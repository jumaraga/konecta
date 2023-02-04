import { User } from "./models/user.model";

export interface RequestWithUSer extends Request{
    User:User
}