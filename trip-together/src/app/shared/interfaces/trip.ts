import { User } from "./user";

export interface Trip {
    _id: string,
    startPoint: string,
    endPoint: string,
    date: string,
    time: string,
    imageUrl: string,
    brand: string,
    seats: number,
    price: number,
    description: string,
    userId: User,
    buddies: User[],
    __v: number
}