import dotenv from "dotenv";
import express from "express";
import nunjucks from "nunjucks";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Configure Express to use NJK
nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.engine('html', nunjucks.render);
app.set('view engine', 'njk');

// define a route handler for the default home page
app.get("/", (req, res) => {
  // render the index template
  res.render('index');
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});