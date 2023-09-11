import { Permission } from "../permission/permission"

export class Module {
    id:number
    name : string
    url : any
    icon : string
    status : boolean = false
    permissionList: Permission[] = []
    
}
