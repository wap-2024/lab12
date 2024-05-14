const express = require("express");
const path = require("path");

const app = express();

// Serve static files (e.g., CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

app.set("port", process.env.PORT || 3000);
app.set("env", process.env.NODE_ENV || "development");

app.enable("case sensitive routing", true);

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/products"));

app.use((err, req, res, next) => {
  res.status(500).send("Error Handler!");
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

const PORT = app.get("port");
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
