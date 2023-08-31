export class Nav {
  id: number;
  name: any;
  url :any;
  parentId: number;
  navChild: Nav[] = [];
  selected: boolean;
  active: boolean;
}
