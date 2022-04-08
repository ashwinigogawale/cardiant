import { creditNote } from "./creditnote";
import { Billing } from "./billingdemo";
import { attachment } from "./attachment";
import { Item } from "./item";
export class demo  {

public orderId:number;


	// invoice details variables
	public status:String;
	public invoiceType:String;
  public requestDate:Date;
	public customerOrderNo:String;
	public serviceRenderedFrom:Date;
	public serviceRenderedTo:Date;
	public serviceRequestBy:String;
	public departmentCode:String;
	public departmentDesc:String;
	public customerCode:String;
	public poNumber:String;
	public vesselCode:String;
	public vesselName:String;
	public inVoyage:String;
	public outVoyage:String;
	public lineCode:String;
	public callNo:String;
	public loa:String;
	public loaUom:String;
	public gt:String;
	public ata:Date;
	public atd:Date;
	public location:String;
	public remarks:String;
	public preparedBy:String;
	public preparerName:String;
	public preparerPositionCode:String;
	public preparerPositionDesc:String;
	public approvedBy:String;
	public approverName:String;
  public approverPositionCode:String;
  public approverPositionDesc:String;
  public approveDate:Date;
  public notifyStatus:String;
  public createdBy:String;
  public updatedBy:String;
  public vesselTosCode:String;
  public serviceId:String;
  public specialPrice:String;
  public createdOnFormated:Date;
  public updatedOnFormated:Date;
  public requestDateFormated:Date;
  public approvedDateFormated:Date;
  public customerName:String;


//public orderAttachments:attachment[];
//public orderItems:Item[];
  // public creditNote: creditNote[];
  // public billing: Billing[];
}
