import { Module } from "../module/module";
import { Permission } from "../permission/permission";

export class Role {
  id : number;
  name : string;
  selected = false;
  module : Module[]
}
