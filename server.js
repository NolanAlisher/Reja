const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://alibrary_nolan:alishermongodb_2001@cluster0.somahqv.mongodb.net/";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB", err);
    else {
      console.log("MongoDB connected successfully");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
