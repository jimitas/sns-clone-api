const express = require("express");
// const cors = require("cors");
const app = express();
const authRoute = require("./routers/auth");
const postsRoute = require("./routers/posts");
const usersRoute = require("./routers/users");

require("dotenv").config();

const PORT = process.env.PORT || 10000;
// const PORT = 5000;

// app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://sns-clone-client.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));