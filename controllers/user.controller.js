require("dotenv").config();
const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { Login, Register } = require("./login.controller");

router.use(express.json({ limit: "50mb" }));

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - caption
 *       properties:
 *         first_name:
 *           type: string
 *           description: First name of the user
 *         last_name:
 *           type: string
 *           description: Last name of the user
 *         email:
 *           type: string
 *           description: Email Address
 *         password:
 *           type: string
 *           description: Password
 *       example:
 *         first_name: Juan
 *         last_name: Dela Cruz
 *         email: sample@gmail.com
 *         password: samplepassword
 */
/**
 * @swagger
 * tags:
 *      name: Register
 *      description: Register User
 */
/**
 * @swagger
 * /register:
 *  post:
 *      summary: Register new user
 *      tags: [Register]
 *      responses:
 *          200:
 *              description: Successfully registered user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 */
router.post("/register", Register);

/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - caption
 *       properties:
 *         email:
 *           type: string
 *           description: Email Address
 *         password:
 *           type: string
 *           description: Password
 *       example:
 *         email: sample@gmail.com
 *         password: samplepassword
 */
/**
 * @swagger
 * tags:
 *      name: Login
 *      description: Login User
 */
/**
 * @swagger
 * /login:
 *  post:
 *      summary: Login User
 *      tags: [Login]
 *      responses:
 *          200:
 *              description: Successfully logged in
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Login'
 */
router.post("/login", Login);

router.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome Home 🙌 ");
});

// This should be the last route else any after it won't work
router.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = router;
