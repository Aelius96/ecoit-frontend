import { Permission } from "../permission/permission"

export class Module {
    id:number
    name : string
    url : string
    icon : string
    status : boolean
    permissionList: Permission[]
}
