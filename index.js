const JSONServer = require("json-server");
const cors = require("cors");
const Server = JSONServer.create();
const defaults = JSONServer.defaults();
const router = JSONServer.router("db.json");
const port = process.env.PORT || 8080;

Server.use(cors());
Server.use(router);
Server.listen(port);
Server.use(defaults);