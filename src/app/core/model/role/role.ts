import { Module } from "../module/module";
import { Permission } from "../permission/permission";

export class Role {
  id : number;
  name : string;
  description:string;
  selected = false;
  moduleList : Module[];
  constructor() {
    this.moduleList = []
  }
}
