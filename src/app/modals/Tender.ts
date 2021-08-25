import { FileUploader } from "ng2-file-upload";
import { InputFiles } from "typescript";
import { Bid } from "./Bid";
import { Complete } from "./Complete";

export class Tender  {
    tenderId:number=0
    description:string =""
    startDate:Date | undefined;
    endDate: Date| undefined;
    url:string="";
    category:string="";
    price:number =0;
    status:string=" ";
    adminId:number=0
    description2:string =""
   
}
