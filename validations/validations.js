import { body } from "express-validator";

export const registerValidator = [
  body("email", "Неверный флрмат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({ min: 5 }),
  body("fullName", "Укажите имяб минимум 3 символа").isLength({ min: 3 }),
  body("avatarUrl", "Неверная ссылка на аватарку").optional().isURL(),
];
export const loginValidator = [
  body("email", "Неверный флрмат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({ min: 5 }),
];

export const postValidator = [
  body("title", "Введите заголовок статьи").isLength({ min: 3 }).isString(),
  body("text", "Введите текст статьи").isLength({ min: 10 }).isString(),
  body("tags", "Неверный формат тэгов (укажите массив)").optional().isString(),
  body("imageUrl", "Неверная ссылка на изображение").optional().isString(),
];
