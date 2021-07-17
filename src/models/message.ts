import { UserModel } from "./user";

export interface MessageModel extends UserModel {
    text: string;
    timestamp: number;
}