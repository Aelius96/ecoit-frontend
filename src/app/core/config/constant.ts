export class Constant {
  public static BASE_URL = "http://localhost:8080";
  // public static BASE_URL= "https://ecoit.com.vn:8443"
  public static PAGE_SIZE_OPTION = [
    5,10,15
  ]
  public static PAGE_SIZE_IMAGE =[
    16,32,48
  ]
  public static ADDRESS ={
    CREATE : `address/add`,
    UPDATE :`address/update`,
    DELETE : `address/delete`,
    LIST : `address`
  }
}
