import Express from "express";
import dotenv from "dotenv";
import ConnectDB from "./DB/db.js";

const app = Express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("<h1>Rent Your House</h1>");
});

app.use(Express.json());
ConnectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
