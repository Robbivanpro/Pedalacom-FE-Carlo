export class Product {
  constructor(CustomerID:number = 0,

    Title:string | undefined= "",
    FirstName:string = "",
    MiddleName:string = "",
    LastName:string = "",
    Suffix:string = "",
    CompanyName:string = "",
    SalesPerson:string = "",
    EmailAddress:string = "",
    Phone:string = "",
    PasswordHash:string = ""
    ){

  }
  CustomerID?:number = 0
  Namestyle?:boolean = true
  Title?:string = ""
  FirstName:string = ""
  MiddleName:string = ""
  LastName:string = ""
  Suffix:string = ""
  CompanyName:string = ""
  SalesPerson:string = ""
  EmailAddress:string = ""
  Phone:string = ""
  PasswordHash?:string = ""
}
