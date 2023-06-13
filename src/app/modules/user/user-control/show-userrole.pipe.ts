import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../../../core/model/user/user";

@Pipe({
  name: 'showUserrole'
})
export class ShowUserrolePipe implements PipeTransform {

  transform(roleName: string): string {

    return roleName;
  }

}
