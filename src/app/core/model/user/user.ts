import {Role} from "../role/role";

export class User {
  id: any;
  username:any;
  email:any;
  password:any;
  firstName:any;
  lastName:any;
  active:any;
  roles?:Role[];
  token: string;


}
