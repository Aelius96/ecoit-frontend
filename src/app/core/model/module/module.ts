import { Permission } from "../permission/permission"

export class Module {
    id:number
    name : any
    url : any
    icon : any
    status : boolean = false
    permissionList: Permission[] = []
}
