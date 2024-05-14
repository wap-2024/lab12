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

const PORT = app.get("port");
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
