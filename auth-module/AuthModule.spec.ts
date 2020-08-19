import * as jwt from "jsonwebtoken";
import { AuthModule } from "./AuthModule";

test("Throws error when initializing Auth module w/o JWT_SECRET", () => {
  // @ts-ignore
  expect(() => new AuthModule()).toThrowError(
    "Creating a new instance of the AuthModule requires JWT Secret to be provided."
  );
});

test("Returns list of roles when valid JWT provided", () => {
  const secret = "secret";
  const jwtToken = jwt.sign({ roles: ["ONE", "TWO"] }, secret);
  const authModule = new AuthModule(secret);

  expect(authModule.getUserRoles(jwtToken)).toEqual(["ONE", "TWO"]);
});

test("Returns empty list of roles when INVALID JWT is provided", () => {
  const secret = "secret";
  const jwtToken = jwt.sign({ roles: ["ONE", "TWO"] }, "malformed");
  const authModule = new AuthModule(secret);

  expect(authModule.getUserRoles(jwtToken)).toEqual([]);
});

test("Returns empty list of roles when no JWT was provided", () => {
  const secret = "secret";
  const authModule = new AuthModule(secret);

  expect(authModule.getUserRoles()).toEqual([]);
});
