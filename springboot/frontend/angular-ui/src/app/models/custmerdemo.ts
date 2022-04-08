export class customerdemo {
  public id: number;
  public customer_code: string;
  public customer_id: string;
  public customer_name: string;

  constructor(id,customer_code,customer_id,customer_name){
    this.id=id;
    this.customer_code=customer_code;
    this.customer_id=customer_id;
    this.customer_name=customer_name;
  }
}
