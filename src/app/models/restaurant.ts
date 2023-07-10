import { Menu } from "./menu";

export class Restaurant{
    restaurantID!:number;
    name!:string;
    address!:string;
    contactNumber!:string;
    menu!:Menu[];
}