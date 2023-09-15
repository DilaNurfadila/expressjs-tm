const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
// import { engine } from "express-handlebars";
const logger = require("./middleware/logger");
const members = require("./Members");
const app = express();

// init middleware
// app.use(logger);

// Handlebars middleware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.set("views", "./views");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage route
app.get("/", (req, res) => {
  res.render("index", { title: "Member App", members });
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   //   res.send("<h1>Hello World!!</h1>");
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Members API Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
