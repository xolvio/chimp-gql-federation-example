import { AddressInfo } from "net";
import { createApp } from "./createApp";

const opts = {
  port: 4002,
};

const getUrl = (address, port) =>
  `://${address === "::" ? "localhost" : address}:${port}`;

createApp()
  .then(({ app }) => {
    const server = app.listen(opts.port);
    const { port, address } = server.address() as AddressInfo;
    process.once("SIGTERM", function () {
      server.close(function () {
        process.kill(process.pid, "SIGTERM");
      });
    });
    console.log(`Server listening on ${getUrl(address, port)}`);
  })
  .catch((e) => {
    console.log("Server did not start up with this error", e);
  });
