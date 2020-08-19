import * as express from "express";
import * as jwt from "jsonwebtoken";

const app = express();
const port = 4003;

app.get("/admin", (req, res) => {
  res.cookie(
    "jwt",
    jwt.sign(
      {
        roles: ["ADMIN"],
      },
      process.env.JWT_SECRET
    )
  );
  res.sendStatus(200);
});

app.get("/user", (req, res) => {
  res.cookie(
    "jwt",
    jwt.sign(
      {
        roles: ["REGISTERED_USER"],
      },
      process.env.JWT_SECRET
    )
  );
  res.sendStatus(200);
});

app.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.sendStatus(200);
});

app.listen(port, () =>
  console.log(`Simple Auth app http://localhost:${port}`)
);
