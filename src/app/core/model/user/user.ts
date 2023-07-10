import {Role} from "../role/role";

export class User {
  id: number;
  username:any;
  email:any;
  password:any;
  firstName:any;
  lastName:any;
  active:any;
  role?:Role[];
  token: string;


}
