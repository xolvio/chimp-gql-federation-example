import { AddressInfo } from "net";
import { createApp } from "./createApp";

const opts = {
  port: 4001,
};

const getUrl = (address, port) =>
  `://${address === "::" ? "localhost" : address}:${port}`;

createApp()
  .then(({ app }) => {
    const { port, address } = app.listen(opts.port).address() as AddressInfo;
    console.log(`Server listening on ${getUrl(address, port)}`);
  })
  .catch((e) => {
    console.log("Server did not start up with this error", e);
  });
