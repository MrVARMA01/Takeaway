import { Time } from "@angular/common";
import { Item } from "./Item";

export class Orders{
    customerName!:string;
    email!:string;
    contactNumber!:number;
    date!:Date;
    time!:Time;
    items!:Item[];
}