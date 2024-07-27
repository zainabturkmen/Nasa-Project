const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://nasa-api:xk8Odc62XjTTNlvb@nasacluster.vthvinz.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";

// const MONGO_URL =
//   "mongodb+srv://nasa-api:xk8Odc62XjTTNlvb@nasacluster.vthvinz.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("Mongodb connection ready!");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}

startServer();
