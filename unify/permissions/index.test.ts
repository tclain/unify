import { exportAllDeclaration } from "@babel/types";
import { resolve } from "../permissions";

describe("permissions/resolve", () => {
  it("should return true", () => {
    expect(resolve()).toBeTruthy();
  });
});
