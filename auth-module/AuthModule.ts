import * as jwt from "jsonwebtoken";

export class AuthModule {
  constructor(private jwtSecret: string) {
    if (!jwtSecret)
      throw new Error(
        "Creating a new instance of the AuthModule requires JWT Secret to be provided."
      );
  }

  getUserRoles = (jwtToken?: string) => {
    if (!jwtToken) return [];
    try {
      return jwt.verify(jwtToken, this.jwtSecret).roles;
    } catch (e) {
      return [];
    }
  };
}
