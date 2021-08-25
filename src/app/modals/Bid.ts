import { Tender } from "./Tender";

export class Bid {
    bidId:number=0;
    tenderId:number=0
    userId:number=0
    bids:number=0
    description:string =""
    price:number =0
    tender:Tender=new Tender; 
}
