export enum Roles {
  admin,
  readWrite,
  readOnly
}

export interface IUser {
  id: string | number;
  email: string;
  roles: Roles[];
}
