import { Lambda } from "@unify/utils/types";
import { RequestHandler } from "express";
import passport from "passport";
import { ExtractJwt, JwtStrategy } from "passport-jwt";
import { IUser, Roles } from "./types";

export interface IJWTStrategyOptions {
  jwtFromRequests: Lambda;
  secretOrKey: string;
  issuer: string;
  audience: string;
}

export const jwtMiddleware: RequestHandler = () => {
  var options: IJWTStrategyOptions = {
    jwtFromRequests: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "not-secure",
    issuer: process.env.JWT_ISSUER || "admin.dev",
    audience: process.env.JWT_AUDIENCE
  };
  passport.use(
    new JwtStrategy(options, function(jwt_payload, done) {
      return done({
        id: 1,
        email: "timothee.clain@admin.com",
        roles: [Roles.admin]
      } as IUser);
    })
  );
};

export const configureAuth = jwtMiddleware;

export const authRequired = () => passport.authenticate("jwt");
