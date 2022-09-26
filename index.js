import express from "express";

import mongoose from "mongoose";
import { loginValidator, registerValidator } from "./validations/validations.js";

import checkAuth from "./utils/checkAuth.js";
import { getMe, login, register } from "./controllers/UserConotroller.js";

mongoose
  .connect(
    "mongodb+srv://admin:qwe123@fullmongo.j8jxstg.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB ok");
  })
  .catch((err) => {
    console.log("DB error", err);
  });

const app = express();

app.use(express.json());

app.post("/auth/login", loginValidator, login);

app.post("/auth/register", registerValidator, register);

app.get("/auth/me", checkAuth, getMe);

app.listen(1111, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("server ok");
});
