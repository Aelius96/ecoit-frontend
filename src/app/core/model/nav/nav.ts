export class Nav {
  id: number;
  name: string;
  url :string;
  parentId: number;
  navChild: Nav[] = [];
  selected: boolean;
  active: boolean;
}
