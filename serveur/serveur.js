const express = require("express");
const routesRacine = require("./routes/routes.racine.js");
const routesTotalSupplies = require("./routes/routes.totalsupplies.js");
const routesLuncStaking = require("./routes/routes.luncstaking.js");
const routesCommunityPool = require("./routes/routes.communitypool.js");
const routesOraclePool = require("./routes/routes.oraclepool.js");
const logger = require("../utils/logger.js");

const start = () => {
  // Création du serveur
  const app = express();

  // Cors
  const whitelist = ["https://scan.terraclassic.app"];
  app.all("*", (req, res, next) => {
    const origin = req.headers.origin;
    if (whitelist.indexOf(origin) !== -1) {
      res.header("Access-Control-Allow-Origin", origin);
    } else {
      res.status(503).send("No direct access allowed");
      return;
    }
    res.header("Access-Control-Allow-Headers", [
      "Content-Type",
      "X-Requested-With",
      "X-HTTP-Method-Override",
      "Accept",
    ]);
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.header("Cache-Control", "no-store,no-cache,must-revalidate");
    if (req.method === "OPTIONS") {
      res.status(200).send("");
      return;
    }
    next();
  });

  // Middlewares
  app.use(express.json()); // Parse application/json
  app.use(express.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded

  // Routes
  app.use("/", routesRacine);
  app.use("/api/totalsupplies", routesTotalSupplies);
  app.use("/api/luncstaking", routesLuncStaking);
  app.use("/api/communitypool", routesCommunityPool);
  app.use("/api/oraclepool", routesOraclePool);

  // Lancement sur le port "process.env.PORT", en HTTPS
  app.listen(process.env.PORT, () => {
    logger.log(`Serveur NodeJS démarré, sur le port ${process.env.PORT}.`);
  });
};

module.exports = { start };
