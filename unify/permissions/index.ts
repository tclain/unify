import { IUser } from "@unify/auth/types";
import { Permission, PermissionResolver } from "./types";
import { RequestHandler } from "express";

export const resolve = () => true;

export const withPermission = (
  permission: Permission,
  resolver: PermissionResolver
): RequestHandler => {
  return (req, res, next) => {
    try {
    } catch (e) {}
  };
};
