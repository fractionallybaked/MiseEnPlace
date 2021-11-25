const express = require("express");
const usersRouter = express.Router();
const { requireUser } = require("./utilities");
const {
  getUserByUsername,
  createUser,
  getUser,
  getAllUsers,
} = require("../db");

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

usersRouter.post("/register", async (req, res, next) => {
  const { username, password, isAdmin } = req.body;
  try {
    if (!username || !password) {
      next({
        message: "Incorrect username or password",
      });
    } else {
      const exists = await getUserByUsername(username);
      if (exists) {
        next({
          name: "UserExistsError",
          message: "Username already exists",
        });
      } else if (password.length < 8) {
        next({
          name: "PasswordTooShortError",
          message: "Password must contain at least 8 characters",
        });
      } else {
        const user = await createUser({ username, password, isAdmin });
        const token = jwt.sign(
          { id: user.id, username: user.username },
          JWT_SECRET,
          { expiresIn: "1w" }
        );
        res.send({ user, token, message: "You're logged in" });
      }
    }
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      next({
        message: "Incorrect username or password",
      });
    } else {
      const user = await getUser({ username, password });
      if (user) {
        const token = jwt.sign(
          { id: user.id, username: user.username },
          JWT_SECRET,
          { expiresIn: "1w" }
        );
        res.send({ user, token, message: "You're logged in" });
      } else {
        next({
          message: "Incorrect username or password",
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/me", requireUser, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/", requireUser, async (req, res, next) => {
  const { id } = req.user;

  try {
    const users = await getAllUsers(id);
    res.send(users);
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
