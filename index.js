import express from "express";

import mongoose from "mongoose";
import { loginValidator, postValidator, registerValidator } from "./validations/validations.js";

import checkAuth from "./utils/checkAuth.js";
import { getMe, login, register } from "./controllers/UserConotroller.js";
import * as PostController from "./controllers/PostController.js";

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

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
app.post("/posts", checkAuth, postValidator, PostController.create);
app.delete("/posts/:id", checkAuth, PostController.remove);
app.patch("/posts/:id", checkAuth, PostController.update);

app.listen(1111, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("server ok");
});
