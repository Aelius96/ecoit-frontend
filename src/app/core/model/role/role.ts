import { Module } from "../module/module";
import { Permission } from "../permission/permission";
import { User } from "../user/user";

export class Role {
  id : number;
  name : string;
  selected = false;
  module : Module[];
}
