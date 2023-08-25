import { Permission } from "../permission/permission";

export class Role {
  id : number;
  name : string;
  selected = false;
  permision:Permission[]=[]
}
