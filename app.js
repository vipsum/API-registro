const express = require("express");
//getting express methods
const app = express();
const port = 3000;
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
