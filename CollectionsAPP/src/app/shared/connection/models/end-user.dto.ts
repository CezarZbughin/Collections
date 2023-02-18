import {ItemDto} from "./item.dto";
import {ItemCollectionDto} from "./item-collection.dto";
import {RoleDto} from "./role.dto";

export class EndUserDto {

  id: number = 0;
  username: string = '';
  roles: RoleDto[] = [];
  collections: ItemCollectionDto[] = [];
  linkedItems: ItemDto[] = [];
  token: string = "";


  constructor(id: number, username: string, roles: RoleDto[], collections: ItemCollectionDto[], linkedItems: ItemDto[], token: string) {
    this.id = id;
    this.username = username;
    this.roles = roles;
    this.collections = collections;
    this.linkedItems = linkedItems;
    this.token = token;
  }

}
