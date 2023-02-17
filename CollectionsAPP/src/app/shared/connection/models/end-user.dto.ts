import {ItemDto} from "./item.dto";
import {ItemCollectionDto} from "./item-collection.dto";
import {RoleDto} from "./role.dto";

export class EndUserDto {
  id: number = 0;
  username: string = '';
  password: string = '';
  roles: RoleDto[] = [];
  collections: ItemCollectionDto[] = [];
  linkedItems: ItemDto[] = [];
  token: string = "";


}
