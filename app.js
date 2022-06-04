const express = require("express");
//getting express methods
const app = express();
const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
