//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const pageRouter = require("./modules/pages/router");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//use the pageRouter for routing all paths (from /)
app.use("/", pageRouter);

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


