import { IUser } from "@unify/auth/types";

export enum PermissionType {
  read,
  write
}

export interface Permission<Record extends {} = any> {
  type: PermissionType;
  fields: keyof Record[];
}

export type PermissionResolver<Record extends {} = any> = (
  permissionRequested: Permission<Record>,
  user: IUser,
  record: Record
) => Promise<boolean>;
